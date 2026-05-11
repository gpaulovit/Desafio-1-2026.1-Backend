function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
