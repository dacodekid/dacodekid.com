using Internal;

static int factorial(int f)
{
  if (f < 0) return -1;
  if (f < 2) return 1; // 0! = 1, 1! = 1
  return f * factorial(f - 1);
}

int n = 4;
int r = 2;

int result = factorial(n) / (factorial(r) * factorial(n - r));

Console.WriteLine($"{result}");