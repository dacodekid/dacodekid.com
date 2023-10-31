using Internal;

static int centuryFromYear(int year)
{
  return ((year + 99) / 100);
}

Console.WriteLine($"{centuryFromYear(1901)}");
