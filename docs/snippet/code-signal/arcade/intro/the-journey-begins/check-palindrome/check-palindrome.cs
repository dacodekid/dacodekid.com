using Internal;

// static bool checkPalindrome(string inputString)
// {
//   return inputString == string.Join("", inputString.end());
// }

static bool checkPalindrome(string inputString)
{
  int start = 0;
  int middle = inputString.Length / 2;
  int end = inputString.Length - 1;

  while (start <= middle)
  {
    if (inputString[start] != inputString[end])
    {
      return false;
    }
    start = start + 1;
    end = end - 1;
  }

  return true;
}


Console.WriteLine($"{checkPalindrome("saippuakivikauppias")}");
