using Internal;
using static System.Math;

static int closetToZero(int[] num)
{
  int n;

  if (num.Length < 1)
  {
    return 0;
  }

  n = num[0];

  foreach (int item in num)
  {
    if ((item != 0) && (Math.Abs(n) > Math.Abs(item)))
    {
      n = item;
    }
  }
  return n;
}

int[] nums = { 5, -5, 2, 0, 11, 4 };
Console.WriteLine($"{closetToZero(nums)}");