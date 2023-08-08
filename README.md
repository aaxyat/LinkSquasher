<h1 align="center">🔗 LinkSquasher 🔗</h1>

<div align="center">

LinkSquasher is a URL shortening service that's as straightforward as it is powerful. Easily deployed as a static site, you can manage your short links with a simple JSON file. Reduce the complexity and cost of running a full-fledged, database-driven link shortener.

</div>

## 🚀 Features
- Easily customizable.
- No database required.
- Can be hosted on any static site host like GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
- Automatic redeployment on changes.

## 🛠️ Getting Started

### Prerequisites
- Node.js (>=14)
- Gatsby CLI

### Installation
1. Clone the repo:
    ```bash
    git clone https://github.com/aaxyat/LinkSquasher.git
    ```
2. Install NPM packages:
    ```bash
    npm install
    ```

### Configuration
Edit the `redirects.json` file at the /data . The format should be:
```json
{
 { "shortUrl": "customname", "longUrl": "https://example.com" },
}
```
For example:
```json
{
  { "shortUrl": "google", "longUrl": "https://google.com" }
}
```
With the above configuration, when someone navigates to `yoursite.com/google`, they will be redirected to `https://www.google.com`.

## 🛠️ Deployment

1. Build the static site:
    ```bash
    gatsby build
    ```
2. Deploy the content of the public folder to your static site host.

For detailed deployment instructions on different platforms, please check the [LinkSquasher Wiki](https://github.com/aaxyat/LinkSquasher/wiki).

- **Hosting on Netlify**: You can also deploy LinkSquasher to Netlify by clicking the button below:

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aaxyat/LinkSquasher)

- **Hosting on Vercel**: To deploy LinkSquasher to Vercel, use the following button:

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/aaxyat/LinkSquasher)

- **Hosting on Cloudflare Pages**: Please follow the instructions on the [Cloudflare Pages deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#cloudflare-pages) of the LinkSquasher Wiki.

- **Hosting on GitHub Pages**: Please follow the instructions on the [GitHub Pages deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#github-pages) of the LinkSquasher Wiki.

- **Hosting on DigitalOcean App Platform**: Please follow the instructions on the [DigitalOcean App Platform deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#digitalocean-app-platform) of the LinkSquasher Wiki.


## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

This project was inspired by [jstayton/suri](https://github.com/jstayton/suri). We appreciate the idea and efforts behind the original project.
