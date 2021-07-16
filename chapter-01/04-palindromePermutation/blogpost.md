# CtCI.js 04 - Palindrome Permutation

Today's goal is to check whether a string is a permutation of a palindrome. That means that if we rearrange the letters we can create a string that reads the same reading it backwards.

Here's my solution:

```javascript
function isEven(n) {
  return n % 2 === 0;
}

function palindromePermutation(input) {
  const characterMap = {};
  const normalizedInput = input.replace(/\s/g, "").toLowerCase();

  for (const character of normalizedInput) {
    if (!characterMap[character]) {
      characterMap[character] = 0;
    }

    characterMap[character]++;
  }

  let singleCharacters = 0;
  for (const characterCount of Object.values(characterMap)) {
    if (isEven(characterCount)) continue;

    singleCharacters++;

    if (singleCharacters > 1) return false;
  }

  return true;
}
```

---

### Approach

First let me explain the idea I used to solve this problem. A palindrome string is basically a mirror string. If it can be read the same both ways that means that if you cut it by the middle you would end up with the same characters in both sides.

For example, "kayak" if you cut it by half you would end up with "ka y ak", where you may have a character at the middle (if the string has odd length) but at both sides you would have the exact same "A" "K" characters.

Putting it in a different way, a palindrome is a string where every character, except the middle one, are included in an even number of times. This means then, that to determinate if a string is a permutation of a palindrome, we need to check if that string has 1 or less characters that only appear once. If it has only one or none, then it can easily be rearranged into a palindrome; but if it doesn't then there's no chance it can be transformed into one.

### Solution

Now that we explained the theory, let's jump into the code for the solution.

First, we create a hash map where we'll store each character and the number of times it appears, as well as to normalize the string by removing spaces (since we don't care about them on palindromes) and making it lower case so we can detect palindromes even if a letter is in a different case.

```javascript
function palindromePermutation(input) {
  const characterMap = {};
  const normalizedInput = input.replace(/\s/g, "").toLowerCase();

  //...
}
```

Then, we counts the number of times each characters appears on it and store it into the hash map.

```javascript
function palindromePermutation(input) {
  // ...

  for (const character of normalizedInput) {
    if (!characterMap[character]) {
      characterMap[character] = 0;
    }

    characterMap[character]++;
  }

  // ...
}
```

Now that we have a map with how many times each character appears, we just need to make sure there's no more than 2 characters that appear an even number of times. We create a counter for that (`singleCharacters`) and now we only need to check each value.

To do so, we use `Object.values()` since we don't care about the character, just how many times it appears. If it appears even number of times, that's good so we can `continue` and check the next character. But if it appears an odd number of times, we add 1 to the single character counter. If that counter passes more than 1, then that's not a palindrome so we can return `false`.

```javascript
function palindromePermutation(input) {
  //...

  let singleCharacters = 0;
  for (const characterCount of Object.values(characterMap)) {
    if (isEven(characterCount)) continue;

    singleCharacters++;

    if (singleCharacters > 1) return false;
  }

  // ...
}
```

And finally if we went through all the characters and we didn't find more than 1 odd characters then we can return `true` as our string fulfills the condition to be rearranged into a palindrome.

Just as a note, this is the function I used to check if a number is even. Pretty standard and straightforward by checking if the modulus is 0 which everyone should be familiar with already but just didn't feel right to leave it out so of the explanation.

```javascript
function isEven(n) {
  return n % 2 === 0;
}
```

That's it, code with tests is available on [github](https://github.com/yayudev/ctci-js/tree/master/chapter-01/04-palindromePermutation).
