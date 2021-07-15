Today's problem is pretty simple to solve with javascript. We need to "urlify" a given string by cutting it including only n number characters and then replace empty spaces with `%20`.

Here's my solution:

```javascript
export function urlify(url, length) {
  return url.trim().slice(0, length).replace(/\s/g, "%20");
}
```

---

Like I said, this is super simple to solve with javascript.

First we trim the trailing spaces so we can include exactly the number of characters we want (`length`) and then we just slice it to take just the first n characters.

```javascript
url.trim().slice(0, length);
```

Finally we need to replace the spaces with `%20` so we just use `.replace` for that. I used a regex `/\s/g` to find all the spaces (`g` means multiple matches, not just the first one) and we replace with a `%20`.

```javascript
url.trim().slice(0, length).replace(/\s/g, "%20");
```

That's it, pretty quick and easy solution.

Code with tests available on [github](https://github.com/yayudev/ctci-js/tree/master/chapter-01/03-urlify).
