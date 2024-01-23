# nlp_project

a NLP project by students at The Baden-Württemberg Cooperative State University (DHBW) Mannheim, Germany.

Personally Identifiable Information (PII) detection in text input using the following dataset:
https://huggingface.co/datasets/ai4privacy/pii-masking-200k.

The goal is to detect if a given text contains private information such as names, addresses, phone numbers, passwords, banking information, etc. Users will be able to enter text into an application and receive feedback about the PII in that text.

## Team Members:

Franziska Marb,
Jannik Völker,
Nik Yakovlev,
Aref Hasan.

# Structure


### App
A small demo application can be found in the app folder. There are extra instructions for the execution and usage in the folder.

### Playground
All our research and prototypes can be found in the playground folder.
There are different Jupyter Notebooks for each of the models we tested for detecting PII. The results can be found in each notebook, or in the paper.


## 


Create venv:

    python -m venv .venv

Activate venv

    .\.venv\Scripts\activate

Deactivate venv

    deactivate

Write packages

    pip freeze > requirements.txt

Install packages

    pip install -r requirements.txt

## Download and prepare data

Most of our Notebooks depend on training / evaluation data to be downloaded from huggingface. This should be possible the the following script.
Make sure to be in the venv environment and then run prepare_data.py

```bash
.\.venv\Scripts\activate
python prepare_data.py
```

## Use data

Read the dataset

```python
df = pd.read_json("data/dataset_english.json")
```
