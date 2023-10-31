// def file_naming(names):
//     new_names = []

//     for name in names:
//         if name in new_names:
//             index = 1
//             while f'{name}({index})' in new_names:
//                 index += 1
//             name = f'{name}({index})'
//         new_names.append(name)

//     return new_names

// print(file_naming(["doc", "doc", "image", "doc(1)", "doc"]))

function fileNaming(names) {
  const newNames = [];

  for (let name of names) {
    if (newNames.includes(name)) {
      let index = 1;
      while (newNames.includes(`${name}(${index})`)) {
        index++;
      }
      name = `${name}(${index})`;
    }
    newNames.push(name);
  }

  return newNames;
}

console.log(fileNaming(['doc', 'doc', 'image', 'doc(1)', 'doc']));
