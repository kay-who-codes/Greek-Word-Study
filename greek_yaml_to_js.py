
with open("greek.yaml", "r") as stream:
    with open('greek.js', 'w') as f:
        f.write(f'const greek_yaml = `\n{stream.read()}`')
