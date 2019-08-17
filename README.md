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

camelCase('first name');
// -> 'firstName'
```

A frequent use case for case conversion is converting the case of object keys.  `case` comes with `camelCaseKeys` and `snakeCaseKeys` helper methods to handle this use case:

```javascript
const { camelCaseKeys, snakeCaseKeys } = require('@mmckelvy/case');

const snakeToCamel = {
  first_name: 'John',
  last_name: 'Smith'
};

camelCaseKeys(snakeToCamel);
/* ->
{
  firstName: 'John',
  lastName: 'Smith'
};
*/

const camelToSnake = {
  firstName: 'John',
  lastName: 'Smith'
};

snakeCaseKeys(camelToSnake);
/* ->
{
  first_name: 'John',
  last_name: 'Smith'
};
*/

```
Works with arrays:

```javascript
const input = [
  {
    first_name: 'John',
    last_name: 'Smith'
  },
  {
    first_name: 'Jane',
    last_name: 'Jenkins'
  },
];

camelCaseKeys(input);
/* ->
[
  {
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    firstName: 'Jane',
    lastName: 'Jenkins'
  },
];
*/
```

To handle nested objects, pass `{recursive: true}` as the second argument:

```javascript
const input = {
  first_name: 'John',
  last_name: 'Smith',
  address: {
    country_of_residence: 'USA',
  }
};

camelCaseKeys(input, {recursive: true});

/* ->
{
  firstName: 'John',
  lastName: 'Smith',
  address: {
    countryOfResidence: 'USA'
  }
};
*/

```

## API
### `snakeCase(str)`
Convert a string to snake_case.


#### params
**str**
`string`

#### return
`string`

A new string in snake_case.








