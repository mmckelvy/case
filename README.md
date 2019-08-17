# case
A set of utility functions for converting case.

## Installation
```
npm install @mmckelvy/case
```

## Usage
Convert the case of a word:

```javascript
const { camelCase, snakeCase } = require('@mmckelvy/case');

camelCase('first_name');
// -> 'firstName'
snakeCase('firstName');
// -> 'first_name'

```

Handles kabob-case, extra underscores, and spaces as well:
```javascript
camelCase('first-name');
// -> 'firstName'
snakeCase('First--Name');
// -> 'first_name'
camelCase('apple pear');
// -> 'applePear'
```

A frequent use case for case conversion is converting the case of object keys.  `case` comes with helper methods to handle this use case:

```javascript
const { camelCaseKeys, snakeCaseKeys } = require('@mmckelvy/case');

const snakeToCamel = {
  first_name: 'John',
  last_name: 'Smith'
};

camelCaseKeys(input);
// ->
{
  firstName: 'John',
  lastName: 'Smith'
};

const camelToSnake = {
  firstName: 'John',
  lastName: 'Smith'
};

snakeCaseKeys(input);
// ->
{
  first_name: 'John',
  last_name: 'Smith'
};

```


