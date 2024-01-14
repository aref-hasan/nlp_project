If app.spec doesn't exist, run: 
    
    pyinstaller --onedir --windowed app.py

include the model:

    a = Analysis(['app/app.py'],
             # ...
            datas=[('backend/model', 'model')],
             # ...
            )

Then run

    pyinstaller app.spec

    