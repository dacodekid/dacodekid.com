function differentSymbolsNaive(s) {
  return new Set(s).size;
}

print(differentSymbolsNaive('cabca'));
