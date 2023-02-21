def file_naming(names):
    new_names = []

    for name in names:
        if name in new_names:
            index = 1
            while f'{name}({index})' in new_names:
                index += 1
            name = f'{name}({index})'
        new_names.append(name)

    return new_names


print(file_naming(["doc", "doc", "image", "doc(1)", "doc"]))
