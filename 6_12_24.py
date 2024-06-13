functions = []

for i in range(10):
    val = i
    functions.append(lambda: val)

for f in functions:
    print(f())
