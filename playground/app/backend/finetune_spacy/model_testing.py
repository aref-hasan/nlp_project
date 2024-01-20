# this is the script to test the spacy_v2 model on test.py dataset

import spacy
from spacy.training import Example
from h_test import TEST_DATA
import json

# Load your trained model
nlp = spacy.load("/Users/nikyakovlev/NLPprojekt/spacy_v2")

# Assuming TEST_DATA is in the same format as TRAIN_DATA

# Convert the test data to spaCy's Example objects
examples = []
for text, annots in TEST_DATA:
    doc = nlp.make_doc(text)  # create a Doc object from the text
    examples.append(Example.from_dict(doc, annots))

# Evaluate the model
scorer = nlp.evaluate(examples)

# Prepare the results
evaluation_results = {
    "Precision": scorer["ents_p"],
    "Recall": scorer["ents_r"],
    "F-score": scorer["ents_f"],
    "Detected Entities": {}
}

# Optionally, add the detected entities for each example in TEST_DATA
for text, _ in TEST_DATA:
    doc = nlp(text)
    evaluation_results["Detected Entities"][text] = [(ent.text, ent.label_) for ent in doc.ents]

# Save the results to a JSON file
with open("evaluation_results_spacy_v2.json", "w") as file:
    json.dump(evaluation_results, file, indent=4)

print("Evaluation results saved to evaluation_results.json")