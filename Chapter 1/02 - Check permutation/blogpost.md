# CtCI.js 02 - Check permutation

Today's problem goals is to check if a string is a permutation (same characters, different order) of another string.

Here's my solution:

```javascript
function stringToHashMap(originalString) {
  const characterMap = {};

  for (const character of originalString.toLowerCase()) {
    characterMap[character] = characterMap[character]
      ? characterMap[character] + 1
      : 1;
  }

  return characterMap;
}

export function isStringPermutation(string1, string2) {
  if (string1.length !== string2.length) return false;

  const string1HashMap = stringToHashMap(string1);
  const string2HashMap = stringToHashMap(string2);
  const keys = Object.keys(string1HashMap);

  for (const key of keys) {
    if (string1HashMap[key] !== string2HashMap[key]) {
      return false;
    }
  }

  return true;
}
```

---

So let's breakdown this a little bit. Here's the main function:

```javascript
export function isStringPermutation(string1, string2) {
  if (string1.length !== string2.length) return false;

  const string1HashMap = stringToHashMap(string1);
  const string2HashMap = stringToHashMap(string2);
  const keys = Object.keys(string1HashMap);

  for (const key of keys) {
    if (string1HashMap[key] !== string2HashMap[key]) {
      return false;
    }
  }

  return true;
}
```

First, we check the two strings to see their length. If both have different length that means the string won't be a proper match so we can early return `false`.

```javascript
export function isStringPermutation(string1, string2) {
  if (string1.length !== string2.length) return false;
  // ...
}
```

Next we will need to convert the strings into hash maps, which will include each character as a key and the number of occurrences it has in that string as the value. For example, "hello" would produce `{ h: 1, e: 1, l: 2, o: 1 }`. The way we do this is

```javascript
function stringToHashMap(originalString) {
  const characterMap = {};

  for (const character of originalString.toLowerCase()) {
    characterMap[character] = characterMap[character]
      ? characterMap[character] + 1
      : 1;
  }

  return characterMap;
}
```

Now that we have the hash maps created, we can check each key in either of the strings' maps and compare it to the other. If the number of occurrences for a character is not the same in both maps, that means the string can't be a permutation of the other one, so we can return `false` as soon as we detect the first error.

```javascript
export function isStringPermutation(string1, string2) {
  // ...
  const string1HashMap = stringToHashMap(string1);
  const string2HashMap = stringToHashMap(string2);
  const keys = Object.keys(string1HashMap);

  for (const key of keys) {
    if (string1HashMap[key] !== string2HashMap[key]) {
      return false;
    }
  }
  //...
}
```

Both strings should have the same number of characters so this check will be enough to notice any difference in the string. If we have no differences, at this point we can't return `true` as both strings contain the same characters.

```javascript
export function isStringPermutation(string1, string2) {
  // ...
  return true;
}
```

Now, I think this is the most readable way to implement it and probably the approach I would take in a real world scenario. However, it is not the most optimal approach I came with. That would be the following:

```javascript
// Optimized version
export function isStringPermutation(string1, string2) {
  if (string1.length !== string2.length) return false;

  const characterMap = {};
  for (const character of string1.toLowerCase()) {
    characterMap[character] = characterMap[character]
      ? characterMap[character] + 1
      : 1;
  }

  for (const character of string2.toLowerCase()) {
    if (!characterMap[character]) return false;

    characterMap[character]--;
  }

  return true;
}
```

The approach is similar, we check the strings' length and we create a hash map of the 1st string at first but the difference is that instead of creating a second hash map for the 2nd string as well, we just iterate for each character on it and reduce the character count by 1 on the hash map each time we encounter that character in the 2nd string. If whenever we iterate a character it doesn't have any occurrences left in the hashmap (`<= 0`) that means the 2nd string had it at least once more than the 1st so we can return `false` as both strings were different.

```javascript
for (const character of string2.toLowerCase()) {
  if (!characterMap[character]) return false;

  characterMap[character]--;
}
```

The advantage of this approach is that we only need to do 2 loops (`O(a + b)`), once to create the hash map and once to check the second string vs the hash map. On the other hand, the first approach would require 3 loops (`O(2a + b)`), once each string to create the hash maps and a third one to compare both strings.

To be honest, the difference would probably not be that much in most cases so personally, unless performance is a really critical priority, I would prefer to use the first approach as it is simpler and easier to reason about without much context. But again, that comes to personal preference and use case so just use whatever works for you :)

Code available with tests on [github](https://github.com/yayudev/ctci-js/tree/master/Chapter%201/02%20-%20Check%20permutation).
