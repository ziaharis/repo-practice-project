student_scores = {
    'Hardik': 88,
    'Aizhi': 50,
    'Irene': 90,
    'Johnny': 80,
    'Gitss': 70
}

# new empty dictionary
student_grades = {}

# go through each key in student score dictionary 
for student, score in student_scores.items():

    # check what grade the score equates to, then add it to student_grades
    if score >= 91:
        student_grades[student] = 'Outstanding'
    elif score >= 81:
        student_grades[student] = 'Exceeds Expectations'
    elif score >= 60:
        student_grades[student] = 'Acceptable'
    elif score >= 40:
        student_grades[student] = 'Fail'
    else:
        student_grades[student] = 'Resit...'

# print the student_grades dictionary to check the result
print(student_grades)
