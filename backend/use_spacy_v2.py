import spacy
import json

def use_spacy_v2(sentence):
    # Load trained model
    nlp = spacy.load("/Users/nikyakovlev/nlp_project/backend/model")
    
    #nlp = spacy.load("../backend/model")

    # Process the sentence
    doc = nlp(sentence)

    # Extract PII entities and their positions
    pii_entities = [(ent.start_char, ent.end_char, ent.label_) for ent in doc.ents]

    # Check if any PII entities were detected
    if pii_entities:
        output = [(sentence, {'entities': pii_entities})]
        json_output = json.dumps(output, indent=4)
        print(json_output)
    else:
        print("No PII entities detected.")

# Example usage
# Specify the path to the JSON file you want to import
file_path = "input_data.json"

# Open and read the JSON file
with open(file_path, 'r') as json_file:
    imported_data = json.load(json_file)

# Access the imported data
input_text = imported_data.get('input_text', '')

#function
use_spacy_v2(input_text)