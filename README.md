# Magzhan Mukanova — Academic Portfolio

A modern, static academic portfolio site. Plain HTML/CSS/JS — no build step,
works directly on GitHub Pages.

## Pages

| File               | Page                                            |
|--------------------|-------------------------------------------------|
| `index.html`       | Home — intro, research focus, featured projects |
| `projects.html`    | Projects with video slots                       |
| `reel.html`        | Animation reel + motion capture reel            |
| `publications.html`| Publications list                               |
| `cv.html`          | CV                                              |

## How to update

- **Text**: open any `.html` file and edit the text directly. Placeholder
  spots are marked with `<!-- PLACEHOLDER ... -->` comments.
- **Videos**: on `projects.html` and `reel.html`, each video slot is a
  `<div class="video-frame">`. Replace the inner `video-placeholder` div with
  a YouTube/Vimeo iframe or a local `<video>` tag — exact snippets are in the
  HTML comments at the top of each page. Local videos go in a `videos/` folder.
- **Photo**: the home page uses `images/Profileone.png`; swap that file to change it.
- **CV PDF**: put your `CV.pdf` into the `files/` folder (the download buttons
  already point to `files/CV.pdf`).
- **Accent color**: edit `--accent` at the top of `css/style.css`.

## Deploy to GitHub Pages

Copy the contents of this folder into your `magimn00.github.io` repository
(replacing the old Jekyll files), commit, and push. GitHub Pages serves it
as-is — no Jekyll needed. (Keeping a `.nojekyll` empty file in the repo root
is recommended to skip the Jekyll build.)
