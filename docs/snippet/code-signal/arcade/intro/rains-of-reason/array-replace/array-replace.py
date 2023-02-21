def array_replace(input_array, element_to_replace, substitution_element):
    return [substitution_element if x == element_to_replace else x for x in input_array]


print(
    array_replace(
        [1, 2, 1], 1, 3
    )
)
