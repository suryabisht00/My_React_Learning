n = 5
for i in range(n):
    for j in range(n):
        if( (j == (n-1)//2 ) or (i == (n-1)//2)):
            print("*", end="")
        else:
            print(" ", end="")
    print()