# Kennel — showcase site

The marketing / download site for [**Kennel**](https://github.com/rishijohri/kennel),
a node-based agentic IDE for macOS.

🌐 **Live:** https://kennel-website.vercel.app

## Stack

A dependency-free **static site** — hand-written HTML, CSS, and a little vanilla JS.
The visual language mirrors Kennel's own
[design system](https://github.com/rishijohri/kennel/blob/main/docs/DESIGN_SYSTEM.md)
(deep-space dark surfaces, one iris hero hue, glass + glow).

```
index.html     # markup + inline lucide icon sprite
styles.css     # design tokens + components
script.js      # scroll reveal, responsive hero canvas, video autoplay-in-view
assets/        # brand art (optimized) + intro video
vercel.json    # clean URLs + asset caching
```

## Develop

It's static — open `index.html`, or serve the folder:

```bash
python3 -m http.server 4321
# → http://localhost:4321
```

## Deploy

Hosted free on Vercel. The download button points at the latest GitHub Release
of the Kennel app:

```
https://github.com/rishijohri/kennel/releases/latest/download/Kennel-0.1.0-universal.dmg
```

## License

[MIT](https://github.com/rishijohri/kennel/blob/main/LICENSE) © 2026 Rishi Johri
