# You will receive a string which will contain words in PascalCase, your job is to convert them into snake_case.

def convert_to_snake_case(pascal_var):
    return pascal_var.replace(pascal_var.title(), "_")

print(convert_to_snake_case("HelloWorld"))