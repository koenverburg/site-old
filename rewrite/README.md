# My Slice of the internet

This is a project that is ever changing due to new insides and new tech that is created.

## Getting Started

This repository is using`pnpm` instead of yarn or npm. PNPM offers me more than Yarn (v1 and v2) and has better monorepo support. Keep this in mind when cloning it your self.
### Build

To build all apps and packages, run the following command:

```bash
cd site
pnpm build
```

### Running

To run all or a single app, run the following command:

```bash
cd site
pnpm serve:web
# or
pnpm serve:docs
```

### Code Standards and Styling

To format the code so everything is writting in one way, run the following commands:

```bash
pnpm depcheck
pnpm typecheck
pnpm lint
```

### Testing

For testing the code, run the following commands:

```bash
pnpm test
```
### Kudos

This project would not exist if it wasn't for the people that created the following:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [NextJs](https://nextjs.com) as a React framework with the best DX.
## License

[MIT](https://choosealicense.com/licenses/mit/)

