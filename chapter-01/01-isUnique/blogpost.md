# CtCI.js 01 - Is Unique

The concept behind this problem is to check if a string has only unique characters.

This was a pretty quick and straightforward problem. Here's my solution:

```javascript
export function hasOnlyUniqueCharacters(testString) {
  const characterMap = {};

  for (const character of testString.toLowerCase()) {
    if (characterMap[character]) return false;

    characterMap[character] = true;
  }

  return true;
}
```

The solution consists in go through each character in the string and have a hashmap which would keep a record of each character we have seen so far.

```javascript
for (const character of testString.toLowerCase()) {
  // ...
  characterMap[character] = true;
  // ...
}
```

On each iteration, we just need to check if that character has already been added to the hashmap, and if so it's a duplicate so we can return false early as this would mean the string isn't just unique characters.

```javascript
for (const character of testString.toLowerCase()) {
  if (characterMap[character]) return false;
  // ...
}
```

If we went through the entire string without finding a single duplicate that means the string has only unique characters so we can return `true`.

```javascript
export function hasOnlyUniqueCharacters(testString) {
  const characterMap = {};

  for (const character of testString.toLowerCase()) {
    // ...
  }

  return true;
}
```

As an extra, based on the solution on the book it seems like it wasn't required but I kinda wanted to take into account different case letters, so I added `testString.toLowerCase()` just to make sure we catch duplicates if one was in lowercase and other in uppercase but I don't think that's required at all so feel free to leave it out.

That's it, that's my solution for today. Code with tests is available at [github](https://github.com/yayudev/ctci-js/tree/master/Chapter%201/01%20-%20Is%20unique).
