# Get an already compiled Mac App
The github repo contains an already compiled Mac app in the folder app/mac_app.
https://github.com/aref-hasan/nlp_project

# Run the App
The app can be run in a python environment.
All necessary dependencies should be included in the requirements.txt

run the app from within the app folder with
    
    python app.py

# Usage

With the app open you can enter a text into the input field that includes personally identifiable information. 
Clicking on Find PII then shows you all the PII the model found in the entered text.
You can always change the entered text and click on Find PII again. 
If you want to clear the in and output you can click on Clear.

# Compile the App
If you want to create a standalone version that should run on your system and doesn't depend on a global python installation follow this guide. 

install pyinstaller with

    pip install pyinstaller

If app.spec doesn't exist, run:
    
    pyinstaller --onedir --windowed app.py

include the model in the app.spec file:

    a = Analysis(['app/app.py'],
             # ...
            datas=[('backend/model', 'model')],
             # ...
            )

Then run to compile the code again with the model

    pyinstaller app.spec

This should give you a dist folder in which you can find the compiled app with all the necessary binaries in an extra folder.
    