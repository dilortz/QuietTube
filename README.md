# QuietTube
No distraction Youtube Player. Need a video link. 

A small, static web app that plays a YouTube video from its link without opening the YouTube home feed, Shorts shelf, or comments page.

## Features

- Accepts standard YouTube links, `youtu.be` links, Shorts links, and YouTube live links.
- Uses YouTube's privacy-enhanced embedded player (`youtube-nocookie.com`).
- No account, API key, backend, or build step required.
- Responsive layout for phones and desktops.
- Can be installed as a basic PWA when hosted over HTTPS.

## Run locally

Open `index.html` in a browser. For service-worker/PWA testing, serve the folder over localhost using any simple static server.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `quietube`).
2. Upload all files in this folder to the repository's root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/quietube/`.

## Add to Android Home Screen

Open the published GitHub Pages URL in Chrome, open the browser menu, and choose **Add to Home screen** or **Install app** if offered.

## Important limitations

Quietube removes the surrounding YouTube browsing interface, but it cannot control every element inside YouTube's official embedded player. YouTube may still show its own controls, branding, ads, or end-screen suggestions. The `rel=0` parameter limits related videos to the same channel; it does not guarantee that all end-screen suggestions disappear. Some videos cannot be embedded because of the uploader's settings, age restrictions, or other YouTube rules.

Quietube is an independent project and is not affiliated with YouTube or Google.
