import json

# Specify the path to the JSON file you want to import
file_path = "input_data.json"

# Open and read the JSON file
with open(file_path, 'r') as json_file:
    imported_data = json.load(json_file)

# Access the imported data
input_text = imported_data.get('input_text', '')

# Use the imported data as needed
print("Imported text:", input_text)

