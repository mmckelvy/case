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

properCase('first_name');
// -> 'First name'

titleCase('first_name');
// -> 'First Name'
```

Handles kabob-case, extra characters, and spaces as well:
```javascript
camelCase('first-name');
// -> 'firstName'

snakeCase('First--Name');
// -> 'first_name'
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
### `camelCase(str)`
Convert a string to camelCase.

#### str
`string`

The string to convert.

#### return
`string`

A new string in camelCase.


### `snakeCase(str)`
Convert a string to snake_case.

#### str
`string`

The string to convert.

#### return
`string`

A new string in snake_case.


### `properCase(str)`
Convert a string to Proper case.

#### str
`string`

The string to convert.

#### return
`string`

A new string in Proper case.


### `titleCase(str)`
Convert a string to Title Case.

#### str
`string`

The string to convert.

#### return
`string`

A new string in Title Case.


### `camelCaseKeys(input, options?)`
Convert object keys to camelCase.

#### input
`object` or `object[]`

An object or array of objects with keys you'd like to convert.

#### options (optional)
`object`

##### options.recursive
`boolean`

Recursively convert keys for nested objects and arrays.

#### return
A new `object` or `object[]` (does not mutate the original `object` or `object[]`).


### `snakeCaseKeys(input, options?)`
Convert object keys to snake_case.

#### input
`object` or `object[]`

An object or array of objects with keys you'd like to convert.

#### options (optional)
`object`

##### options.recursive
`boolean`

Recursively convert keys for nested objects and arrays.

#### return
A new `object` or `object[]` (does not mutate the original `object` or `object[]`).


### `compare(a, b, fn?)`
Standardize two strings and then compare them.

#### a
`string`

The first string to compare.

#### b
`string`

The second string to compare.

#### fn (optional)
`function`

A function applied to each string to standardize it.  Defaults to `snakeCase`.

#### return
`boolean`

`true` if the strings are `===` after applying the standardization function, else `false`.
