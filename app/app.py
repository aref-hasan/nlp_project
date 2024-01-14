from gui.gui import Gui
from backend.backend import SpacyModel


class App:
    def __init__(self):
        print("App started")
        print("Loading model...")
        self.model = SpacyModel()
        print("Model loaded")

        self.gui = Gui(predict=self.predict, clear=self.reset_gui)
        print("GUI initialised")
        self.gui.run()

    def predict(self):
        """This method is called when the predict button is pressed.
        It first resets the GUI.
        Then handles empty input after which it calls the predict method of the model.
        According to the result, it calls the GUI to show the PII entities or a message that no entities were found.
        """
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

    def reset_gui(self):
        """This method is called when the clear button is pressed.
        It clears the input field removes the output label and table and removes the error indicator.
        This way the GUI is reset to its initial state.
        """
        self.gui.clear_input()
        self.gui.destroy_output()
        self.gui.set_error(False)


# def main():


if __name__ == "__main__":
    App()
