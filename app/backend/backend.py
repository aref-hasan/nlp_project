import spacy
from typing import Union
import os, sys


class SpacyModel:
    """Use this class to load the model once and then call the predict method multiple times."""

    def __init__(self):
        # Check if running in a PyInstaller bundle
        if getattr(sys, "frozen", False):
            # If so, use the bundled model
            base_path = getattr(sys, "_MEIPASS", "") or os.path.abspath(".")
        else:
            # Otherwise, use the normal path
            base_path = os.path.dirname(__file__)

        model_path = os.path.join(base_path, "model")

        self.nlp = spacy.load(model_path)

    def predict(self, sentence: str) -> Union[list[tuple[str, str, int, int]], None]:
        """This method is used to predict PII entities in a sentence using the already loaded spacy model.

        Args:
            sentence (str): The sentence to be analyzed for PII entities

        Returns either:
            Union[list[tuple[str, str, int, int]], None]:  A list with all PII entities detected in the sentence.
                The tuple is constructed in the following way:category, text, start_position, end_position.
                If no entities are found: None.

        """
        # Process the sentence
        doc = self.nlp(sentence)
        if not doc.ents:
            return None
        # Extract PII entities and their positions

        return [
            (ent.label_, ent.text, ent.start_char, ent.end_char) for ent in doc.ents
        ]


# Example usage
# model = SpacyModel()
# input_text = "My name is John Smith and I live in London."
# model.predict(input_text)
