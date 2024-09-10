import random
import re

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to Zia's Password Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

password_list = []
for _ in range(nr_letters):
    password_list.append(random.choice(letters))

for _ in range(nr_symbols):
    password_list.append(random.choice(symbols))

for _ in range(nr_numbers):
    password_list.append(random.choice(numbers))

random.shuffle(password_list)
password = "".join(password_list)
print(f"Your password is: {password}")

# Calculate password strength
def calculate_password_strength(password):
    if len(password) < 8:
        return 'Weak'
    if (re.search(r'[A-Z]', password) and 
        re.search(r'[a-z]', password) and 
        re.search(r'\d', password) and 
        re.search(r'[!@#$%^&*(),.?":{}|<>]', password)):
        return 'Strong'
    if (re.search(r'[A-Z]', password) and 
        re.search(r'[a-z]', password) and 
        re.search(r'\d', password)):
        return 'Moderate'
    return 'Weak'

strength = calculate_password_strength(password)
print(f"Password Strength: {strength}")
