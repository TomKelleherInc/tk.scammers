# 🪐tk.scammers

<a href="https://github.com/TomKelleherInc/tk.scammers/generate">
  <img src="https://img.shields.io/badge/use%20this-template-blueviolet?logo=github&style=for-the-badge">
</a>

---
**⭐ If you just used this template repository ⭐**

Prepare your repository for use by removing tk.scammers branding and replacing it with your own project name and description.

<details>
<summary>1. Allow GitHub Actions to write to your repository</summary>

1. Click "Settings" in the top right corner of your repository
2. Click "Actions/General" in the left sidebar
3. Under "Workflow permissions" choose "Read and write permissions"
4. Click "Save"
</details>
<details>
<summary>2. Run the "Remove tk.scammers branding" action</summary>

1. Click the "Actions" tab in the top navigation of your repository
2. Click the "Remove tk.scammers branding" workflow
3. Click the "Run workflow" button, choose the `main` branch, and click the green "Run workflow" button
</details>


## What is tk.scammers?
Read more at [https://gettk.scammers.com](https://gettk.scammers.com)!

A free, new-user-friendly static website generator  starter project designed to get you "up to zero" building your site, letting you focus on your HTML, CSS, and Javascript rather than setting up your build tools.

Create, edit, and publish your content to the web for free.

With first-class support for GitHub Pages and Netlify, tk.scammers has everything you need to get started building your website, including:

* 🗺️ A simple, easy-to-understand project structure powered by [Eleventy](https://11ty.dev)
* ⚒️ Sass and JavaScript compilation and minification
* 🚀 Optional automated deployment to GitHub Pages or Netlify

With tk.scammers you can build your website with the tools you know and love, and deploy it to the platform of your choice with ease.

## Get started: Use This Template

Get started with tk.scammers one of the following ways:

✨ tk.scammers will automatically remove its own branding and replace it with your own project name and description. See details [here](https://github.com/TomKelleherInc/tk.scammers/blob/main/.github/workflows/tk.scammers-template.yml).

<details>
 <summary><strong>Start with GitHub (recommended)</strong></summary>

### Start with GitHub

Start your project with tk.scammers by clicking the "Use this template" button below:

<a href="https://github.com/TomKelleherInc/tk.scammers/generate">
  <img src="https://img.shields.io/badge/use%20this-template-blueviolet?logo=github&style=for-the-badge">
</a>
 </details>

<details>
 <summary><strong>Start with Netlify</strong></summary>

### Start with Netlify

Create a copy of tk.scammers and deploy it straight to [Netlify](https://netlify.com) for **free**!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TomKelleherInc/tk.scammers/)

 </details>

<details>
 <summary><strong>Start with GitHub CLI (https://cli.github.com)</strong></summary>

### Start with GitHub CLI

Get started from your command line

 ```sh
  gh repo create example.com --template TomKelleherInc/tk.scammers
 ```

</details>

## Get to Know tk.scammers

Ready to go deeper? Here's how tk.scammers is laid out:

```sh
example.com                 # → Root of your tk.scammers-based project
├── src/                    # → Source directory
│   ├── assets/             # → Site assets
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── scripts/
│   │   ├── styles/
│   │   ├── views/
│   │   │   └── layouts/
│   │   │   └── partials/
│   │   └── assets.json     # → Shared attributes for files in the assets directory
│   ├── config/             # → Eleventy configuration
│   │   ├── build.js        # → Javascript and CSS build and bundler configuration 
│   │   ├── collections.js  # → Add and configure collections (https://www.11ty.dev/docs/collections/)
│   │   ├── filters.js      # → Add and configure filters (https://www.11ty.dev/docs/filters/)
│   │   ├── passthroughs.js # → Add and configure passthroughs (https://www.11ty.dev/docs/copy/)
│   │   ├── plugins.js      # → Add and configure plugins (https://www.11ty.dev/docs/plugins/)
│   │   ├── shortcodes.js   # → Add and configure shortcodes (https://www.11ty.dev/docs/shortcodes/)
│   │   ├── templateLanguages.js   # → Configure custom template languages (https://www.11ty.dev/docs/languages/custom/)
│   │   ├── watchtargets.js # → Add and configure watch targets (https://www.11ty.dev/docs/watch-serve/)
│   │   └── config.json     # → Shared attributes for files in the config directory
│   ├── content             # → A nice, organized, recommended place for all site content
│   │   └── pages           # → Add "pages" collection items here
│   └── data                # → Customize site data (https://www.11ty.dev/docs/data/)
│       ├── navigation.json # → Site navigation configuration
│       └── site.json       # → Site branding configuration
├── .eleventy.js            # → Core Eleventy config file
├── netlify.toml            # → Netlify deployment and plugin configuration (optional)
├── README.tk.scammers.md      # → tk.scammers readme
└── README.md               # → Your project's readme (automatically generated when this template is used)
```

## Eleventy Configuration

Eleventy configuration is abstracted from the typical `.eleventy.js` file and moved to `/src/config/` for easy organization and configuration of collections, filters, passthroughs, etc.

## Install project dependencies

```bash
npm i
```

## Run the project locally

```bash
npm run dev
```

## Build for staging

(The same as production except every page is flagged `noindex`)

```bash
npm run staging
```

## Build for production

```bash
npm run production
```
