from gui.gui import Gui
from backend.backend import SpacyModel


class App:
    def __init__(self):
        print("App started")
        print("Loading model...")
        self.model = SpacyModel()
        print("Model loaded")

        self.gui = Gui(predict=self.predict, clear=self.clear)
        print("GUI initialised")
        self.gui.run()

    def predict(self):
        # Reset GUI by destroying previous output and removing error indicator
        self.gui.destroy_output()
        self.gui.set_error(False)

        input = self.gui.get_input().strip()

        # If there is no input, show error message and return
        if len(input) == 0:
            self.gui.set_error(True)
            return

        pii_entities = self.model.predict(input)

        output_label_text = (
            "The following PII are found:"
            if pii_entities is not None
            else "No PII entities detected."
        )

        self.gui.set_output(
            output_label_text=output_label_text,
            pii_entries=pii_entities,
        )

    def clear(self):
        self.gui.clear_input()
        self.gui.destroy_output()
        self.gui.set_error(False)


# def main():


if __name__ == "__main__":
    App()
