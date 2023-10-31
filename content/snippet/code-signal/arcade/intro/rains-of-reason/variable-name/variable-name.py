def variable_name_v1(name):
    if name[0].isdigit() or (not name.replace('_', '').isalnum()):
        return False
    return True


def variable_name_v2(name):
    return name.isidentifier()


print(variable_name_v1('_abc123__'))
