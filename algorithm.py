import dict
import string

text = input("Put in your text \n")
text_array = text.split()

total = 0
feminine = 0
masculine = 0
race = 0


for word in text_array:
    nopunc = word.translate(word.maketrans("","", string.punctuation))
    processed = nopunc.lower()
    if processed in dict.feminine:
        feminine = feminine + 1
    if processed in dict.masculine:
        masculine = masculine + 1
    if processed in dict.race:
        race = race + 1
    total = total + 1

print("Percentage fem: " + str((feminine * 100)/total))
print("Percentage mas: " + str((masculine * 100)/total))
print("Percentage rac: " + str((race * 100)/total))