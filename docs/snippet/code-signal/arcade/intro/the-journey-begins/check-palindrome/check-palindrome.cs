using Internal;

static bool checkPalindrome(string inputString)
{
  return inputString == string.Join("", inputString.Reverse());
}

Console.WriteLine($"{checkPalindrome("saippuakivikauppias")}");
