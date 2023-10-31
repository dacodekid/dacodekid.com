def rgb_to_hex_conversion(r, g, b):
    return '{:02X}{:02X}{:02X}'.format(
        min(max(r, 0), 255),
        min(max(g, 0), 255),
        min(max(b, 0), 255)
    )


print(rgb_to_hex_conversion(255, 255, 256))
