# Cynthia Bortolotto’s academic website

A lightweight, responsive academic website prepared for **https://cynthiabort.github.io/**. This address is the intended destination; publication still requires creating the repository and enabling GitHub Pages under the `cynthiabort` account.

The site uses plain HTML, CSS, and a little JavaScript. It has no package dependencies or build step. Fonts (EB Garamond for headings, Inter for text) load from Google Fonts, with system fonts as fallback. Papers, navigation, and expandable descriptions work without JavaScript; JavaScript adds the publication filters on the Research page.

## Preview

Open `index.html` directly in a browser. Alternatively, from this directory run:

```sh
python3 -m http.server 8898 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8898. Stop the server with Ctrl+C when finished.

## Publish with GitHub Pages

1. Sign in to GitHub as **cynthiabort**.
2. Create a **public** repository named **cynthiabort.github.io**. If pushing this local Git repository, leave GitHub’s README, license, and .gitignore initialization options off.
3. Push this folder to the repository, or use GitHub’s “uploading an existing file” link to upload `index.html`, `research.html`, `teaching.html`, `styles.css`, `script.js`, `favicon.svg`, `404.html`, `cv.pdf`, and the `assets` folder. Include `.nojekyll` when using Git. The site also works with GitHub’s default Jekyll processing if the browser uploader omits that empty hidden file.
4. Under **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
5. Wait for GitHub’s Pages deployment to succeed, then open **https://cynthiabort.github.io/**.

GitHub’s official instructions: https://docs.github.com/en/pages/quickstart

If pushing locally after creating the repository, use the authenticated `cynthiabort` account:

```sh
git remote add origin https://github.com/cynthiabort/cynthiabort.github.io.git
git add index.html research.html teaching.html styles.css script.js favicon.svg 404.html cv.pdf assets .nojekyll .gitignore README.md
git commit -m "Create academic website"
git push -u origin main
```

No custom domain, paid hosting, or GitHub Actions workflow is required.

## Edit the content

The site has three pages that share `styles.css`. The header and footer are repeated at the top and bottom of each page.

- **`index.html` (Home):** arched Rio photo, biography, research-interest tags, the four most recent papers, appointments and education, and contact details. The email is written out as text ("cynthiab at impa dot br") on purpose, so spam bots can't harvest it.
- **`research.html`:** research-interest titles, the full list of papers and preprints (with filters), and the thesis. To add a paper, copy an existing `<article class="paper">`, give it a unique `id`, and set `data-kind` to `journal` or `preprint`. Also update the "Recent work" cards on the Home page.
- **`teaching.html`:** the numbered course list. Copy an `<li>` to add a course.
- **Colors, fonts, spacing:** `styles.css`. The colors are defined at the top of the file.
- **CV:** replace `cv.pdf` with an updated file using the same filename.
- **Update date:** change "Updated October 2026" in the footer of each page.

## Photos

Each page has an arched photo in `assets/photos/`. All are freely licensed from Wikimedia Commons, and each photo shows its credit and license underneath, as these licenses require:

- **Home, `rio.jpg`:** Botafogo and Sugarloaf Mountain, Rio de Janeiro. Photo by Arne Müseler, CC BY-SA 3.0 DE. https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_Botafago.jpg
- **Research, `zurich.jpg`:** The Limmat, Zürich. Photo by Daniel Kraft, CC BY-SA 3.0. https://commons.wikimedia.org/wiki/File:Z%C3%BCrich_view_Quaibr%C3%BCcke_20200702.jpg
- **Teaching, `serra-gaucha.jpg`:** Vale dos Vinhedos, Serra Gaúcha. Photo by Felipe Valduga, CC BY 2.0. https://commons.wikimedia.org/wiki/File:Panorama_from_Hotel_Spa_do_Vinho_in_Vale_dos_Vinhedos_Bento_Gon%C3%A7alves.jpg

To use your own photos instead, replace the files with the same names (about 2400px wide) and edit the `<figcaption>` under that photo. The `object-position` on each `<img>` controls which part of the photo shows inside the arch.

## Content provenance

Biography, teaching, selected talks, appointments, and education were adapted from the workspace CV `ETH/CV/CynthiaBortolottoCV.impa.tex` (October 2026). The downloadable PDF is the corresponding existing CV. No current photo, Google Scholar profile, or ORCID identifier was supplied, so none has been invented.

Publication metadata was cross-checked against these public records where accessible:

- https://arxiv.org/abs/2608.26365
- https://arxiv.org/abs/2605.00673
- https://arxiv.org/abs/2504.12866
- https://arxiv.org/abs/2406.06771
- https://arxiv.org/abs/2303.03768
- https://arxiv.org/abs/2001.11546
- https://doi.org/10.1112/mtk.70024
- https://doi.org/10.3929/ethz-b-000674909

The Monthly article’s journal DOI and 2026 publication status are taken from the CV; its publisher page was not accessible to the browsing tool. Short paper descriptions are paraphrases, with links to the original manuscripts.
