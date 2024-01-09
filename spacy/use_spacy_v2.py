import spacy
import json

def use_spacy_v2(sentence):
    # Load your trained model
    nlp = spacy.load("/Users/nikyakovlev/nlp_project/spacy/spacy_v2")

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
sentence = "Register for our 'Male and Preventive Medicine' webinar at 4 o'clock. Proceeds go to Provence-Alpes-Côte d'Azur public health initiatives. Donate to 0x4a3ae4ddfef27a5ca873f86f408a6f085bc1dd74."
use_spacy_v2(sentence)