# Llunevie Web Showcase

Official editorial landing page for **[Llunevie](https://github.com/Llunatics/Llunevie)** — a native Android eReader, Light Novel reader, and book collection manager.

## Features
- **Scroll-Driven Card-Stack Physics**: Each chapter card scales, blurs, and fades smoothly as the next chapter rises into focus.
- **Live Reading Palette Switcher**: Preview the entire landing page in Llunevie's 4 reading themes (**Paper**, **White**, **Sepia**, **Black**).
- **Live GitHub Release APK Integration**: Queries `https://api.github.com/repos/Llunatics/Llunevie/releases` automatically to link the primary download button directly to the latest `.apk` binary and display its version tag and size.
- **Bilingual (`ID` / `EN`)**: Instant toggle between Bahasa Indonesia and English.

## Project Structure
```text
llunevie-web/
├── index.html
├── vercel.json
├── package.json
├── assets/
│   ├── llunevie-icon.svg
│   └── screenshots/
└── src/
    ├── styles/
    │   └── main.css
    └── scripts/
        └── app.js
```

## Deploy to Vercel
1. Push this directory to a GitHub repository (or a `web/` subfolder).
2. Import the repository in **[Vercel](https://vercel.com/new)** with Framework Preset set to **Other** (Static).
3. Click **Deploy**.
