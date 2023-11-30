# %%
import pandas as pd

from huggingface_hub import hf_hub_download

import ast

# %%
# https://huggingface.co/datasets/ai4privacy/pii-masking-200k

# Download the german dataset to the local data folder
# SOURCE https://huggingface.co/docs/huggingface_hub/guides/download

print("Downloading german dataset.")
hf_hub_download(
    repo_id="ai4privacy/pii-masking-200k",
    filename="german_pii_52k.jsonl",
    repo_type="dataset",
    local_dir="data",
)
print("Finished downloading german dataset.")
# Download the english dataset to the local data folder
print("Downloading english dataset.")
hf_hub_download(
    repo_id="ai4privacy/pii-masking-200k",
    filename="english_pii_43k.jsonl",
    repo_type="dataset",
    local_dir="data",
)

# %%
# read both datasets from json
# SOURCE https://pandas.pydata.org/docs/reference/api/pandas.read_json.html
print("Reading datasets.")
df_german: pd.DataFrame = pd.read_json("./data/german_pii_52k.jsonl", lines=True)
df_english: pd.DataFrame = pd.read_json("./data/english_pii_43k.jsonl", lines=True)

# %%
# clean all ' characters from original data
# SOURCE https://www.geeksforgeeks.org/replace-values-in-pandas-dataframe-using-regex/
print("Removing ' character from masked_text and unmasked_text.")
df_german.replace(
    {
        "masked_text": {"'": ""},
        "unmasked_text": {"'": ""},
    },
    regex=True,
    inplace=True,
)
df_english.replace(
    {
        "masked_text": {"'": ""},
        "unmasked_text": {"'": ""},
    },
    regex=True,
    inplace=True,
)

# %%
# turn the specified columns from str to dict / list
# SOURCE https://stackoverflow.com/questions/39169718/convert-string-to-dict-then-access-keyvalues-how-to-access-data-in-a-class
print("Parsing correct type for columns.")
df_german[["privacy_mask", "span_labels"]] = df_german[
    ["privacy_mask", "span_labels"]
].apply(lambda col: col.apply(ast.literal_eval))

df_english[["privacy_mask", "span_labels"]] = df_english[
    ["privacy_mask", "span_labels"]
].apply(lambda col: col.apply(ast.literal_eval))


# %%
# remove the ' characters in the tokenised_text
# SOURCE https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html
print("Removing ' character from tokenised_text.")
df_german.tokenised_text = df_german.tokenised_text.apply(
    lambda lst: [item for item in lst if item != "'"]
)
df_english.tokenised_text = df_english.tokenised_text.apply(
    lambda lst: [item for item in lst if item != "'"]
)

# %%
# write the prepared datasets to json
# SOURCE https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_json.html
print("Writing german dataset.")
df_german.to_json("data/dataset_german.json")
print("Writing english dataset.")
df_english.to_json("data/dataset_english.json")

print("Finished")
