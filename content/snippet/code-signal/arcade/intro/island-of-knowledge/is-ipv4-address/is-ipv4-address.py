import ipaddress


def is_ipv4_address(inputString):
    try:
        ipaddress.ip_address(inputString)
        return True
    except ValueError:
        return False


print(is_ipv4_address("234.3.123.123"))
