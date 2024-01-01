## nlp_project

a NLP project by students at The Baden-Württemberg Cooperative State University (DHBW) Mannheim, Germany.

Personally Identifiable Information (PII) detection in text input using the following dataset:
https://huggingface.co/datasets/ai4privacy/pii-masking-200k.

The goal is to detect if a given text contains private information such as names, addresses, phone numbers, passwords, banking information, etc. Users will be able to enter text into an application and receive feedback about the PII in that text.

### Team Members:

Franziska Marb,
Jannik Völker,
Nik Yakovlev,
Aref Hasan.

## Project Setup

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
