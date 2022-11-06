import dict
import string

text = input("Put in your text \n")
text_array = text.split()


for word in text_array:
    nopunc = word.translate(word.maketrans("","", string.punctuation))
    processed = nopunc.lower()
    if processed in dict.feminine:
        print(processed + " " + str(dict.feminine[processed]))
    if processed in dict.masculine:
        print(processed + " " + str(dict.masculine[processed]))
    else:
        print(processed + " " + "neutral")