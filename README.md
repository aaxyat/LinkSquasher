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

For detailed deployment instructions on different platforms, please check the [LinkSquasher Wiki](https://github.com/aaxyat/LinkSquasher/wiki).

- **Hosting on Cloudflare Pages**: Please follow the instructions on the [Cloudflare Pages deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#cloudflare-pages) of the LinkSquasher Wiki.

- **Hosting on GitHub Pages**: Please follow the instructions on the [GitHub Pages deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#github-pages) of the LinkSquasher Wiki.

- **Hosting on Netlify**: You can also deploy LinkSquasher to Netlify by clicking the button below:

   \[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aaxyat/LinkSquasher)

- **Hosting on Vercel**: To deploy LinkSquasher to Vercel, use the following button:

   \[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/aaxyat/LinkSquasher)

- **Hosting on DigitalOcean App Platform**: Please follow the instructions on the [DigitalOcean App Platform deployment page](https://github.com/aaxyat/LinkSquasher/wiki/Deployment#digitalocean-app-platform) of the LinkSquasher Wiki.

1. Build the static site:
    ```bash
    gatsby build
    ```
2. Deploy the content of the public folder to your static site host.

#### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Faaxyat%2FLinkSquasher)

#### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aaxyat/LinkSquasher)

#### Hosting on Cloudflare Pages

Cloudflare Pages provides an easy-to-use platform to deploy and scale your websites and applications directly from your GitHub repository. It's a great choice for hosting static Gatsby projects.

##### Prerequisites

- A GitHub account
- A Cloudflare account

##### Step-by-step guide

1. **Navigate to Cloudflare Pages dashboard**

Log into Cloudflare and navigate to the Cloudflare Pages dashboard.

2. **Create a new project**

Click the 'Create a project' button.

3. **Connect your GitHub account**

If it's your first time using Cloudflare Pages, you'll need to authorize access to your GitHub account. This allows Cloudflare Pages to deploy your commits.

4. **Select the appropriate GitHub repository**

Select the repository you wish to deploy in Cloudflare Pages.

5. **Configure your project**

On the next screen, you'll need to configure your project:
  - **Project name:** This will determine the subdomain of your site (`<project-name>.pages.dev`).
  - **Production branch:** Typically, this is the `main` or `master` branch of your repository.
  - **Build settings:** For a Gatsby project, the Build command should be `npm run build` or `gatsby build`, and the Build output directory should be `public/`.

6. **Click on the 'Save and Deploy' button**

Cloudflare Pages will deploy your site for the first time. This might take a couple of minutes.

After the deployment is successful, you'll receive a unique subdomain for your project under `pages.dev`. You can also set up a custom domain if you prefer.

For more detailed information, refer to the [official Cloudflare Pages documentation](https://developers.cloudflare.com/pages/getting-started).

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
