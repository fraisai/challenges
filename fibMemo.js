// O(n) time and O(n) space
fibMemo(n, memo = {}) {
  in (n in memo) return memo[n];
  if (n <= 2) return 1;
  
  memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
  
  return memo[n];
}
