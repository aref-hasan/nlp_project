# https://pypi.org/project/tksvg/#description
# https://realpython.com/python-gui-tkinter/
# https://www.tutorialspoint.com/how-to-resize-an-entry-box-by-height-in-tkinter
# https://www.tutorialspoint.com/how-to-insert-a-temporary-text-in-a-tkinter-entry-widget
# https://www.askpython.com/python-modules/tkinter/change-font-size-tkinter



import tkinter as tk
from tkinter import PhotoImage
import PIL

def myClick():
    global processed_flag, entry, window, output_label, output_entry, error_label

    # Check if the input field is not empty and does not consist of only spaces
    input_text = entry.get().strip()
    
    # Initialize input_pii
    input_pii = None

    if not processed_flag and len(input_text) > 0:
        input_pii = input_text

        # Display the found PII
        output_label = tk.Label(window,
                                text='The following PII are found:',
                                width=40,
                                height=1,
                                font=('Arial', 24, 'bold'))
        output_label.pack(pady=10)

        output_entry = tk.Entry(window,
                                width=40)
        output_entry.insert(0, input_pii)
        output_entry.pack(pady=10)

        processed_flag = True

        # Hide the error label if text has been entered
        error_label.pack_forget()

    # Check if the input field is empty and display the error label
    elif not processed_flag and len(input_text) == 0:
        error_label.pack(pady=10)

    # Check if the input field is not empty and hide the error label
    elif processed_flag:
        error_label.pack_forget()

def clearFields():
    global processed_flag, entry, window, output_label, output_entry, error_label

    # Reset the flag
    processed_flag = False

    # Clear the text in the input field
    entry.delete(0, 'end')

    # Clear the text in the output field
    if output_label:
        output_label.destroy()
    if output_entry:
        output_entry.destroy()

    # Hide the error label
    error_label.pack_forget()

def main():
    global processed_flag, entry, window, output_label, output_entry, error_label

    # Main window
    window = tk.Tk()
    window.title('PII Detector')

    # Headline Window
    label = tk.Label(window,
                     text='Your PII Detector',
                     width=40,
                     height=2,
                     font=('Arial', 32, 'bold'))
    label.pack(pady=10)

    # Load PNG-file
    png_path   = PhotoImage(file="GUI\lock_2.png")
    png_image = png_path

    # Resize the image to 10% of the original size using subsample
    width, height = png_image.width(), png_image.height()
    scaled_image = png_image.subsample(int(width * 0.5), int(height * 0.5))


    # Create a Tkinter Label and set the image
    canvas = tk.Label(window,
                      image=scaled_image,
                      width=40,
                      height=30)
    canvas.image = png_image  # Referenz behalten, um das Bild korrekt anzuzeigen
    canvas.pack(pady=(0, 10), fill="both", expand=True)

    # Create Input
    input_label = tk.Label(window,
                           text='Put into your text:',
                           width=40,
                           height=1,
                           font=('Arial', 24, 'bold'))
    entry = tk.Entry(window,
                     width=40)
    
    input_label.pack(pady=10)
    entry.pack(pady=10)

    # Create a label for the error indicator (red exclamation mark)
    error_label = tk.Label(window, text='\u26A0', fg='red', font=('Arial', 20, 'bold'))
    error_label.pack_forget()  # Initially hide the error label

    # Create find PII button
    button = tk.Button(window,
                       text="Find PII",
                       width=10,
                       height=1,
                       bg="purple",
                       fg="white",
                       font=('Arial', 16, 'bold'),
                       command=myClick)
    button.pack(pady=10)

    # Create clear button
    clear_button = tk.Button(window,
                             text="Clear",
                             width=10,
                             height=1,
                             bg="red",
                             fg="white",
                             font=('Arial', 16, 'bold'),
                             command=clearFields)
    clear_button.pack(pady=10)

    # Initialize the flag
    processed_flag = False

    # Initialize output fields as None
    output_label = None
    output_entry = None

    window.mainloop()

if __name__ == "__main__":
    main()
