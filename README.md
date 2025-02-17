# 🌟 Serverless Quote Generator (Cloudflare Workers)

A simple, serverless web app that generates a random quote using **Cloudflare Workers**.  
Built using **JavaScript (V8 engine)** and deployed on **Cloudflare's Edge Network**, it ensures ultra-fast performance without needing a backend server.

## 🚀 Features:
- Generates a random quote on each page refresh.
- Runs entirely on Cloudflare Workers (serverless execution).
- No backend or database required.

## 🛠 How It Works:
1. User requests the page → Cloudflare Worker processes the request.
2. The Worker selects a **random quote** from a predefined list.
3. A dynamically generated HTML page is returned as the response.
4. Clicking the **"New Quote"** button reloads the page for another quote.

## 🏗 Deployment Steps:
1. Create a new Cloudflare Worker via [workers.cloudflare.com](https://workers.cloudflare.com/).
2. Replace the default code with `index.js` from this repo.
3. Click **Deploy** to go live!

🌍 **Live Demo**: [my-app.lw-abhisingh.workers.dev](https://my-app.lw-abhisingh.workers.dev)
