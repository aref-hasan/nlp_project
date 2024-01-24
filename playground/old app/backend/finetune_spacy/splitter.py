# This is the code for splitting the coverted dataset into test and train data

from h_newtraindata import TRAIN_DATA

# Split the TRAIN_DATA
train_data = TRAIN_DATA[:35000]
test_data = TRAIN_DATA[35000:]

# Save the train_data to train.py
with open('train.py', 'w') as file:
    file.write('TRAIN_DATA = [\n')
    for entry in train_data:
        file.write(f'    {entry},\n')
    file.write(']\n')

# Save the test_data to test.py
with open('test.py', 'w') as file:
    file.write('TEST_DATA = [\n')
    for entry in test_data:
        file.write(f'    {entry},\n')
    file.write(']\n')

print("Data split and saved into train.py and test.py")
