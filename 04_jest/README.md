# Jest

## Create a new project

Create a new directory:

```mkdir my-first-test```

Change to that directory:

```cd my-first-test```

Initialize a new JS project:

```yarn init```

## Install Jest

Install jest:

```yarn add jest```

## Create sum

Create a sum.js file with a sum function:

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

## Create test

Create a sum.test.js file with a test:

```
const sum = require("./sum");

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
```

Run jest:

```yarn run jest```
