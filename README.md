# ts-jest issue #481 reproduce

This is a reproduce for [ts-jest issue #481](https://github.com/kulshekhar/ts-jest/issues/481).

## Steps to reproduce:

### 1. Start the server the tsc and node way

Please execute

```
yarn start
```

to start the express server. It will serve `Some text.` on port 3000.
It will log:

```
'import * as express from "express"' returned a function
```

Then kill the server using CTRL^C

### 2. Start the tests

Please execute

```
yarn test
```

to execute the tests. It will log:

```
'import * as express from "express"' returned a object
```

### 3. Disable synthetic default imports

Edit `tsconfig.json` and remove the line `"allowSyntheticDefaultImports": true`.

### 4. Run the tests again

Please execute

```
yarn test
```

to execute the tests. It will log:

```
'import * as express from "express"' returned a function
```
