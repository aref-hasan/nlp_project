# https://pypi.org/project/tksvg/#description
# https://realpython.com/python-gui-tkinter/
# https://www.tutorialspoint.com/how-to-resize-an-entry-box-by-height-in-tkinter
# https://www.tutorialspoint.com/how-to-insert-a-temporary-text-in-a-tkinter-entry-widget
# https://www.askpython.com/python-modules/tkinter/change-font-size-tkinter


import tkinter as tk
from tkinter import ttk
from typing import Callable


class Gui:
    def __init__(self, predict: Callable, clear: Callable):
        """Initialise the GUI and uses

        Args:
            app (_type_): _description_
        """
        self.window = tk.Tk()
        self.window.title("PII Detector")

        # Create welcome label
        self.welcome_lbl = tk.Label(
            self.window,
            text="Your PII Detector",
            width=40,
            height=2,
            font=("Arial", 32, "bold"),
        )

        # Create input label
        self.input_label = tk.Label(
            self.window,
            text="Enter your text:",
            width=40,
            height=1,
            font=("Arial", 24, "bold"),
        )
        # Create input field
        self.input_entry = tk.Text(self.window, width=40, height=7)

        # Create a label for the error indicator (red exclamation mark)
        self.error_label = tk.Label(
            self.window, text="\u26A0", fg="red", font=("Arial", 20, "bold")
        )

        # Create predict button
        self.predict_btn = tk.Button(
            self.window,
            text="Find PII",
            width=10,
            height=1,
            bg="black",
            fg="white",
            # bg="black",
            # fg="white",
            font=("Arial", 16, "bold"),
            command=predict,
        )

        # Create clear button
        self.clear_btn = tk.Button(
            self.window,
            text="Clear",
            width=10,
            height=1,
            bg="black",
            fg="white",
            # bg="black",
            # fg="white",
            font=("Arial", 16, "bold"),
            command=clear,
        )

        # Pack all elements
        self.welcome_lbl.pack(pady=10)
        self.input_label.pack(pady=10)
        self.input_entry.pack(pady=10)
        self.error_label.pack_forget()  # Initially hide the error label
        self.predict_btn.pack(pady=10)
        self.clear_btn.pack(pady=10)

        # Initialize output fields as None
        self.output_label = None
        self.output_table = None

    def run(self):
        """Starts the mainloop of the GUI."""
        self.window.mainloop()

    def get_input(self) -> str:
        """Returns the input from the input field.

        Returns:
            str: Returns the text from the input field.
        """
        return self.input_entry.get("1.0", "end-1c")

    def clear_input(self):
        """Clears the input field."""
        self.input_entry.delete("1.0", "end")

    def destroy_output(self):
        """Destroys the output label and table."""
        if self.output_label:
            self.output_label.destroy()
        if self.output_table:
            self.output_table.destroy()

    def set_output(
        self,
        output_label_text: str,
        pii_entries: list[tuple[str, str, int, int]] | None = None,
    ):
        """This method is used to set the output label and table.

        Args:
            output_label_text (str): The text to be displayed in the output label.
            pii_entries (list[tuple[str, str, int, int]] | None, optional):] | None, optional):. The PII entities to be displayed in the output table.
                None if there were no.
                Defaults to None.
        """
        self.output_label = tk.Label(
            self.window,
            text=output_label_text,
            width=40,
            height=1,
            font=("Arial", 24, "bold"),
        )
        self.output_label.pack(pady=10)

        if pii_entries is None:
            return

        columns = ("Category", "Detected Entity", "Start Position", "End Position")
        self.output_table = ttk.Treeview(self.window, columns=columns, show="headings")

        # Define headings
        for col in columns:
            self.output_table.heading(col, text=col.title())

        # Insert data
        for pii_entity in pii_entries:
            self.output_table.insert(
                "",
                tk.END,
                values=pii_entity,
            )
        self.output_table.pack(expand=True, fill="both")

    def set_error(self, error: bool):
        """This method is used to set the error indicator."""
        self.error_label.pack(pady=10) if error else self.error_label.pack_forget()
