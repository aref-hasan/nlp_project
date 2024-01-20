# this is the script to fine-tune spacy on the hugging-face dataset

import spacy
import random
from h_train import TRAIN_DATA
from spacy.training import Example
from spacy.util import minibatch, compounding
# Create a blank English model
# nlp = spacy.blank("en")

# OR load an existing model
nlp = spacy.load("en_core_web_sm")

examples = []
for text, annots in TRAIN_DATA:
    doc = nlp.make_doc(text)
    examples.append(Example.from_dict(doc, annots))

if "ner" not in nlp.pipe_names:
    ner = nlp.create_pipe("ner")
    nlp.add_pipe(ner, last=True)
else:
    ner = nlp.get_pipe("ner")

for _, annotations in TRAIN_DATA:
    for ent in annotations.get("entities"):
        ner.add_label(ent[2])

# Disable other pipeline components during training
other_pipes = [pipe for pipe in nlp.pipe_names if pipe != "ner"]
with nlp.disable_pipes(*other_pipes):
    optimizer = nlp.resume_training()
    for itn in range(20):  # Number of training iterations
        random.shuffle(examples)
        losses = {}

        # Batch up the examples using spaCy's minibatch
        batches = minibatch(examples, size=compounding(4., 32., 1.001))
        for batch in batches:
            nlp.update(
                batch,
                drop=0.5,  # dropout - make it harder to memorise data
                losses=losses)
        print(losses)

for text, _ in TRAIN_DATA:
    doc = nlp(text)
    print("Entities", [(ent.text, ent.label_) for ent in doc.ents])

nlp.to_disk("/Users/nikyakovlev/NLPprojekt/spacy_v2")
