# This is the script to restructure the hugging-face dataset, so that spacy can read it
import json

def convert_jsonl_to_train_data(jsonl_file, output_file):
    train_data = []

    with open(jsonl_file, 'r') as file:
        for line in file:
            data = json.loads(line)

            # Extracting unmasked_text and converting span_labels string to list
            unmasked_text = data['unmasked_text']
            span_labels_str = data['span_labels'].replace("'", '"')
            span_labels = json.loads(span_labels_str)

            # Converting span labels to entity format
            entities = []
            for span in span_labels:
                start, end, label = span
                if label != 'O':  # Exclude 'O' labels if they are not needed
                    entities.append((start, end, label))

            # Adding to train data
            train_data.append((unmasked_text, {"entities": entities}))

    # Writing to output file
    with open(output_file, 'w') as out_file:
        out_file.write("TRAIN_DATA = [\n")
        for data in train_data:
            out_file.write(f"    {data},\n")
        out_file.write("]\n")

# Example usage
jsonl_file = '/Users/nikyakovlev/NLPprojekt/english_pii_43k.jsonl'  # Replace with your file path
output_file = 'output_train_data.py'  # Name of the output Python file
convert_jsonl_to_train_data(jsonl_file, output_file)
