# website

Astro website for Mosteiro Landim.

To run this, you'll need:

- Node.js 20+
- `npm`

## Install and run locally

```bash
npm install
npm run dev
```

This starts the local server `http://localhost:4321`.

## Build

```bash
npm run build
```

This creates the production output in `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Netlify

This project already includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`

### Option 1: Git-based deploy (recommended)

1. Push this folder to a Git repository.
2. In Netlify, choose **Add new site** > **Import an existing project**.
3. Select the repository.
4. Netlify should read `netlify.toml` automatically.
5. Deploy.

### Option 2: Netlify CLI deploy

Install CLI:

```bash
npm install -g netlify-cli
```

Build and deploy:

```bash
npm run build
netlify deploy --prod --dir=dist
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.