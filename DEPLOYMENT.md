# How to Make Your Portfolio Live Outside Google AI Studio

Congratulations! Your portfolio is built with standard **React 19 + TypeScript + Vite + Tailwind CSS** and compiles into a 100% self-contained static web application. It does not depend on any proprietary runtime and can be hosted for **free** on any modern web hosting platform.

---

## ⚡ Option 1: 60-Second Instant Deploy with Netlify Drop (No Terminal or Coding Needed)

This is the fastest method:

1. Download **`regi-manabat-portfolio-dist.zip`** (available directly in the portfolio app via the **"Go Live / Export"** button or at `/regi-manabat-portfolio-dist.zip`).
2. Unzip the file on your computer. You will see a folder containing `index.html` and an `assets` folder with all your images, video walkthrough, and stylesheets.
3. Open your browser and navigate to: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
4. Drag and drop the unzipped folder into the Netlify Drop area.
5. **Done!** Your portfolio will be live in ~10 seconds with a free `.netlify.app` web address and automatic free HTTPS / SSL certificate.
6. *(Optional)* In your Netlify dashboard under **Site Settings > Domain management**, you can attach your custom domain (e.g., `regimanabat.com` or `portfolio.regimanabat.com`).

---

## 🚀 Option 2: Deploy to Vercel via GitHub (Recommended for Long-term Updates)

1. Download **`regi-manabat-portfolio-source.zip`** (or push your repository to GitHub).
2. Unzip and initialize a Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/regi-manabat-portfolio.git
   git push -u origin main
   ```
3. Go to **[https://vercel.com](https://vercel.com)**, sign in with GitHub, and click **"Add New Project"**.
4. Import your `regi-manabat-portfolio` repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your site will automatically rebuild and deploy whenever you push new changes to GitHub.

---

## ☁️ Option 3: Cloudflare Pages (Free, Unlimited Bandwidth)

1. Log in to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** and navigate to **Workers & Pages**.
2. Click **Create Application > Pages**.
3. Choose either:
   - **Direct Upload**: Upload the unzipped `dist` folder directly.
   - **Connect to Git**: Link your GitHub repository with Build Command `npm run build` and Output Directory `dist`.
4. Click **Deploy Site**.

---

## 💻 Option 4: Local Development on Your Machine

To run and edit the codebase locally on your computer:

1. Ensure **Node.js** (v18 or higher) is installed.
2. Unzip `regi-manabat-portfolio-source.zip` and open the folder in your terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.
6. To build the production files at any time:
   ```bash
   npm run build
   ```
   This generates the fresh static bundle in the `dist/` directory.

---

## 🌐 Custom Domain Setup

To use your own custom domain (e.g. `regimanabat.com`):
1. In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.), add the DNS records provided by Netlify or Vercel:
   - **CNAME Record**: Name: `www`, Target: `[your-site].netlify.app` or `cname.vercel-dns.com`
   - **A Record**: Name: `@`, Target: Netlify or Vercel's IP address.
2. SSL certificates are provisioned automatically at no cost.
