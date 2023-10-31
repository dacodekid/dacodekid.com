def find_email_domain(address):
    return address[address.rindex('@') + 1:]


print(find_email_domain('abc@gmail.com'))
