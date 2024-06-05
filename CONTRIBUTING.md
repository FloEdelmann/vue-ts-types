# Contributing

Contributing issues and pull requests is highly appreciated!

Please follow these guidelines:

## Development setup

Make sure that Node.js (at least version 16) is installed.  
Install all development dependencies with `npm install`.

Run tests and type tests:

```bash
npm run test
npm run type-test
```

Or in watch mode:

```bash
npm run test:watch
npm run type-test:watch
```

Before you commit, run all following commands to ensure that all tests pass:

```bash
npm run test
npm run type-test
npm run lint
npm run build
```

## Adding a new prop type

When adding a new prop type, you need to modify several files:

1. `src/prop-types/yourNewPropType.ts` (in camelCase please!) – the implementation.
2. `src/index.ts` – re-export the new prop type from the main entrypoint.
3. `tests/prop-types/yourNewPropType.spec.ts` – the unit tests.
4. `type-tests/prop-types/yourNewPropType.type.spec.ts` – the type tests.
5. `README.md` – the documentation.

Please use the existing files as a reference and follow the existing style.
