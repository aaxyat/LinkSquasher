<h1 align="center">🔗 LinkSquasher 🔗</h1>

<div align="center">
  
LinkSquasher is a URL shortening service that's as straightforward as it is powerful. Easily deployed as a static site, you can manage your short links with a simple JSON file. Reduce the complexity and cost of running a full-fledged, database-driven link shortener.

</div>

## 🚀 Features
- Easily customizable.
- No database required.
- Can be hosted on any static site host like GitHub Pages, Netlify, or Cloudflare Pages.
- Automatic redeployment on changes.

## 🛠️ Getting Started

### Prerequisites
- Node.js (>=14)
- Gatsby CLI

### Installation
1. Clone the repo:
    ```
    git clone https://github.com/aaxyat/LinkSquasher.git
    ```
2. Install NPM packages:
    ```
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

### Deployment
1. Build the static site:
    ```
    gatsby build
    ```
2. Deploy the content of the public folder to your static site host.

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
