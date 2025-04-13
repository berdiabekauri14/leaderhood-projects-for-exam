# Create a program that checks if a given string is a palindrome (reads the same forward and backward). The function should ignore spaces, punctuation, and capitalization.

def palindrome(string):
    if string[::-1]:
        return True
    else:
        return False

print(palindrome("Hello world"))