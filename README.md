# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The GitHub Actions workflow builds and publishes the static site when `main` is
updated, or when it is run manually. In the repository's **Settings → Pages**,
set the build and deployment source to **GitHub Actions**. The resulting URL is
`https://vishalharne.github.io/Om-Raje-New-UI/`.

The repository is private; GitHub Pages availability for private repositories
depends on the account's GitHub plan. Publishing a Pages site can make the site
public even when its source repository is private.

The Pages build uses `/Om-Raje-New-UI/` as its base path; local development
continues to use `/`. If the repository is renamed, update the base path in
`vite.config.ts` and the build checks in `.github/workflows/deploy.yml`.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
