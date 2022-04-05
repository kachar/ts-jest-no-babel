# ts-jest-no-babel

Running `ts-jest` without babel, with typescript types inside the `.spec.ts` file produced an error

Related to https://github.com/kulshekhar/ts-jest/discussions/3396

## Runing the tests

```
yarn test
```

## Expected output

```
yarn run v1.22.18
$ jest
FAIL  libs/one/first.spec.ts
Test first types
✓ test ok (2 ms)
✕ test fail (2 ms)

● Test first types › test fail

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

4 |   });
5 |   it("test fail", () => {
> 6 |     expect(false).toBe(true);
|                   ^
7 |   });
8 | });
9 |

at Object.<anonymous> (first.spec.ts:6:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.24 s
Ran all test suites.
```

## Actual output

```
yarn run v1.22.18
$ jest
FAIL  libs/one/first.spec.ts
● Test suite failed to run

Jest encountered an unexpected token

Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

By default "node_modules" folder is ignored by transformers.

Here's what you can do:
• If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
• If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
• To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
• If you need a custom transformation specify a "transform" option in your config.
• If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

You'll find more details and examples of these config options in the docs:
https://jestjs.io/docs/configuration
For information about custom transformations, see:
https://jestjs.io/docs/code-transformation

Details:

SyntaxError: /home/kachar/Projects/ts-jest-no-babel/libs/one/first.spec.ts: Missing semicolon. (1:4)

> 1 | type TestOne = {
|     ^
2 |   name: string;
3 | };
4 |

at instantiate (../../node_modules/@babel/parser/src/parse-error/credentials.js:61:22)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.33 s, estimated 1 s
Ran all test suites.
```


## Comparison when running `ts-jest` with `babel`

In https://github.com/kachar/ts-jest-no-babel/pull/1 you may find sample Babel configuration which mitigates this issue

The expected behavior is that types are supported in both scenarios of `ts-jest` with or without Babel
