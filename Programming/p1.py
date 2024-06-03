# print("hello world")

names = ['Anna', 'Beth', 'Chad', 'Drew', 'Elsa', 'Fred']
grades = [56, 92, 87, 43, 75, 62]

for i in range(0, len(names) ):
    
    if grades[i] >= 90:
        print(names[i] + " got a grade of 'A' on the exam.")
    elif grades[i] >= 80:
        print(names[i] + " got a grade of 'B' on the exam.")
    elif grades[i] >= 70:
        print(names[i] + " got a grade of 'C' on the exam.")
    elif grades[i] >= 60:
        print(names[i] + " got a grade of 'D' on the exam.")
    else:
        print(names[i] + " got a grade of 'F' on the exam.")