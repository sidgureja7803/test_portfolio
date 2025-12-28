# EmailJS Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up using your email or Google account

### Step 2: Add Email Service

1. Once logged in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or any other service
4. Click **"Connect Account"** and sign in with your Gmail
5. Give it a name (e.g., "Portfolio Contact")
6. Click **"Create Service"**
7. **Copy the Service ID** - you'll need this!

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Settings:**
- **Template Name**: Portfolio Contact Form
- **To Email**: `{{to_name}}` (or your email: `siddhantgureja39@gmail.com`)
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Subject**: `Portfolio Contact: {{subject}}`

**Template Content (HTML):**
```html
<div>
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> {{from_name}}</p>
  <p><strong>Email:</strong> {{from_email}}</p>
  <p><strong>Subject:</strong> {{subject}}</p>
  <p><strong>Message:</strong></p>
  <p>{{message}}</p>
</div>
```

4. Click **"Save"**
5. **Copy the Template ID** - you'll need this!

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Find **"Public Key"**  (under API Keys section)
3. **Copy the Public Key**

### Step 5: Add Credentials to Your Project

1. In your Portfolio folder, create a file named `.env`
2. Add the following (replace with your actual IDs):

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

3. **IMPORTANT**: Add `.env` to your `.gitignore` to keep credentials private

### Step 6: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C or Cmd+C)
npm run dev
```

## ✅ Testing

1. Go to your portfolio: `http://localhost:3000`
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox - you should receive the message!

## 🎯 Template Variables Explained

The contact form sends these variables to EmailJS:
- `from_name` - Name entered in the form
- `from_email` - Email entered in the form
- `subject` - Subject line
- `message` - Message content
- `to_name` - "Siddhant Gureja" (your name)

## 🔒 Security Tips

1. **Never commit your `.env` file to GitHub**
2. The `.env.example` file is safe to commit (it has placeholder values)
3. For production deployment (Vercel, Netlify, etc.), add these as environment variables in your hosting dashboard

## 🐛 Troubleshooting

### Emails not sending?
- Check that all three IDs are correct in `.env`
- Make sure you restarted the dev server after creating `.env`
- Check browser console for errors
- Verify your EmailJS account is active

### Getting "Failed to send" error?
- Verify your Service ID is correct
- Make sure your email service is connected in EmailJS dashboard
- Check if you've exceeded free tier limit (200 emails/month)

### Emails going to spam?
- This is normal for the first few emails
- Mark them as "Not Spam" in your email client
- Consider using a custom domain email for better deliverability

## 📊 Free Tier Limits

- ✅ 200 emails/month
- ✅ Unlimited contact forms
- ✅ Email templates
- ✅ Auto-reply setup
- ✅ Email history

Need more? Upgrade to Personal ($7/month) for 1,000 emails.

## 🎨 Customization

### Want auto-reply to users?

1. In EmailJS dashboard, create a second template for auto-reply
2. In the Contact.js file, add another `emailjs.send()` call:

```javascript
// Send to you
await emailjs.send(serviceID, templateID, {...});

// Auto-reply to user
await emailjs.send(serviceID, 'template_autoreply', {
  to_email: formData.email,
  to_name: formData.name
});
```

### Want to customize the success message?

Edit the toast notification in `Contact.js`:

```javascript
toast({
  title: "✉️ Your custom title!",
  description: "Your custom message!",
});
```

## 🌐 Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Find "Environment Variables"
3. Add all three variables:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## 📞 Need Help?

If you encounter any issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify all steps above
3. Make sure your Gmail security settings allow third-party apps

---

**That's it!** Your portfolio contact form is now fully functional and will send emails directly to your inbox. 🎉
