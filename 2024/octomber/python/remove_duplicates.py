# Create a program that receives a list and removes duplicate elements while maintaining the original order.

def remove_duplicates(lst):
    for i in range(len(lst)):
        if lst.count(lst[i]):
            return lst.pop(i)
        
    return lst

print(remove_duplicates([1, 2, 3, 5, 4, 5]))