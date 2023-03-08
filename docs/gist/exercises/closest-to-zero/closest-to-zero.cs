using Internal;
using static System.Math;

static int closetToZero(int[] nums)
{
  int smallestNum;

  if (nums.Length < 1)
  {
    return 0;
  }

  smallestNum = nums[0];

  for (int i = 1; i < nums.Length; i++)
  {
    if (nums[i] == 0) continue;

    if (Math.Abs(smallestNum) == Math.Abs(nums[i]))
    {
      smallestNum = Math.Abs(smallestNum);
    }
    else if (Math.Abs(smallestNum) > Math.Abs(nums[i]))
    {
      smallestNum = nums[i];
    }
  }

  return smallestNum;

}

int[] nums = { -5, 5, 12, 0, 11, 14 };
Console.WriteLine($"{closetToZero(nums)}");