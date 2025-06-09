# PortfolioSpa

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.12.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. When changes are pushed to the `main` branch, a GitHub Actions workflow will automatically build and deploy the application to GitHub Pages.

### Automatic Deployment

The deployment process is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. This workflow:

1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the application with production configuration
5. Deploys the built application to the `gh-pages` branch

The deployed application will be available at `https://yeisoncardona.com/`. A CNAME file is automatically created during the deployment process to configure the custom domain.

### Manual Deployment

If you need to deploy manually, you can use the following command:

```bash
npm run deploy
```

This uses the `angular-cli-ghpages` package to build and deploy the application to GitHub Pages.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
