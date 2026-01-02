# Environment Variables Setup Guide

## 🔐 Security Note
**NEVER commit your API keys to Git!** Always use environment variables.

## 📋 Local Development Setup

### Step 1: Create `.env.local` file
Create a file named `.env.local` in the root directory of your project:

```bash
# In the project root directory
touch .env.local
```

### Step 2: Add your Groq API Key
Open `.env.local` and add:

```env
GROQ_API_KEY=your_actual_groq_api_key_here
```

Replace `your_actual_groq_api_key_here` with your actual Groq API key from [Groq Console](https://console.groq.com/keys).

### Step 3: Restart Development Server
After adding the environment variable, restart your Next.js development server:

```bash
npm run dev
```

## 🚀 Vercel Deployment Setup

### Method 1: Using Vercel Dashboard (Recommended)

1. **Go to your Vercel project dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Select your project

2. **Navigate to Settings**
   - Click on your project
   - Go to **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add Environment Variable**
   - Click **Add New** button
   - **Key**: `GROQ_API_KEY`
   - **Value**: Your Groq API key (e.g., `your_actual_groq_api_key_here`)
   - **Environment**: Select all environments (Production, Preview, Development)
   - Click **Save**

4. **Redeploy**
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on your latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger automatic deployment

### Method 2: Using Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Add Environment Variable**
   ```bash
   vercel env add GROQ_API_KEY
   ```
   - When prompted, paste your API key
   - Select all environments (Production, Preview, Development)

4. **Redeploy**
   ```bash
   vercel --prod
   ```

## ✅ Verification

### Local Development
1. Check that `.env.local` exists and contains your API key
2. Restart your dev server
3. Test the chat feature - it should work without errors

### Vercel Deployment
1. After adding the environment variable, check the deployment logs
2. Test the chat feature on your live site
3. If you see "API key is not configured" error, make sure:
   - Environment variable name is exactly `GROQ_API_KEY`
   - It's added to all environments (Production, Preview, Development)
   - You've redeployed after adding it

## 🔍 Troubleshooting

### Issue: "API key is not configured" error
**Solution:**
- Verify the environment variable name is exactly `GROQ_API_KEY` (case-sensitive)
- Make sure you've restarted the dev server after creating `.env.local`
- For Vercel: Ensure you've redeployed after adding the environment variable

### Issue: Environment variable not working in Vercel
**Solution:**
- Check that the variable is added to the correct environment (Production/Preview/Development)
- Make sure there are no extra spaces in the variable name or value
- Redeploy your application after adding the variable

### Issue: Git is tracking .env.local
**Solution:**
- Check `.gitignore` includes `.env*`
- If `.env.local` is already tracked, remove it:
  ```bash
  git rm --cached .env.local
  git commit -m "Remove .env.local from tracking"
  ```

## 📝 Important Notes

- `.env.local` is already in `.gitignore` - it won't be committed
- Never share your API keys publicly
- If your API key is exposed, regenerate it immediately from Groq Console
- Use different API keys for development and production if needed

## 🔗 Useful Links

- [Groq Console - API Keys](https://console.groq.com/keys)
- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

