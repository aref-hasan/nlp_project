import spacy
import json

def use_spacy_v2_cl():
    # Load trained model
    nlp = spacy.load("/Users/nikyakovlev/nlp_project/backend/model")

    #nlp = spacy.load("../backend/model")

    # a sentence input from the command line
    sentence = input("Enter a sentence to analyze for PII: ")

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

#function
use_spacy_v2_cl()