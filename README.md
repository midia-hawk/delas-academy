# delas-academy

This repository contains a small static site. To publish it on GitHub Pages at https://github.com/midia-hawk/delas-academy follow these steps:

1. Commit and push your changes to the `main` branch.
2. The included GitHub Actions workflow (`.github/workflows/pages.yml`) will automatically build and deploy the repository to GitHub Pages.
3. After the workflow runs, the site will be available at:

   https://midia-hawk.github.io/delas-academy/

Notes:
- The workflow publishes the repository root as the Pages content. Ensure your `index.html` is at the repository root (it already is).
- A `.nojekyll` file is included to prevent Jekyll processing of the site.

If you prefer to enable Pages from the repository settings instead of using Actions, go to: Settings → Pages and set the source branch to `gh-pages` or `main` depending on preference.
