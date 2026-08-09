# Allen Peter — Portfolio

A responsive, configuration-driven portfolio with a dark glassmorphism visual system. It uses plain HTML, CSS, and JavaScript, so there is no framework build step or production dependency.

## Update the content

All portfolio text, links, roles, skills, projects, and credentials live in `portfolio.config.js`. Edit that file; the page renders it automatically.

Optional UI content has an `enabled` boolean beside its data. Set `personal.resume.enabled` to show or hide résumé links, and set a `stats` entry's `enabled` value to show or hide that metric.

Education extras support optional navigation. Add a URL and the activity automatically becomes an external arrow link; leave it empty to render plain text:

```js
extras: [
  {
    label: "Activity or achievement",
    url: "https://example.com/details",
  },
]
```

## Preview locally

Because the content configuration is loaded as an ES module, preview through a local server rather than opening `index.html` directly:

```powershell
npm run dev
```

## Deploy to Vercel

Import the repository in Vercel and leave the framework preset as **Other**. There is no build command and the output directory is the project root (`.`).

`vercel.json` enables clean URLs, so pages are served without a visible `.html` suffix. The main portfolio is available at the domain root.
