# EmailJS Setup Guide

## Local Development

Your local `.env.local` already has the credentials configured. The contact form is working end-to-end.

**.env.local (already configured):**
```
EMAILJS_PUBLIC_KEY=BH5Xfd4t_wLezpX2Z
EMAILJS_PRIVATE_KEY=U7kFaaDvLU9Up5xkV2mnD
EMAILJS_SERVICE_ID=service_28w0pro
EMAILJS_TEMPLATE_ID=template_388lhxg
```

To test locally:
```bash
npm run dev
# Visit http://localhost:3000 and test the contact form
```

---

## Production Deployment (Vercel)

### Step 1: Commit and Push Code

```bash
git checkout -b fix/emailjs-private-key-integration
git add app/api/send-email/route.ts package.json package-lock.json EMAILJS_SETUP.md
git commit -m "fix: add private key authentication for EmailJS server-side API"
git push -u origin fix/emailjs-private-key-integration
```

Then create a PR on GitHub and merge to main.

### Step 2: Update Vercel Environment Variables

1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project → Settings → Environment Variables
3. Remove these (old client-side variables):
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

4. Add these new variables (server-side only):

   | Key | Value |
   |-----|-------|
   | `EMAILJS_PUBLIC_KEY` | `BH5Xfd4t_wLezpX2Z` |
   | `EMAILJS_PRIVATE_KEY` | `U7kFaaDvLU9Up5xkV2mnD` |
   | `EMAILJS_SERVICE_ID` | `service_28w0pro` |
   | `EMAILJS_TEMPLATE_ID` | `template_388lhxg` |

5. Click "Save"
6. Trigger a redeploy: Settings → Deployments → Click "..." on latest deployment → Redeploy

### Step 3: Test Production

```bash
# Test the production API
curl -X POST https://ckmasangcay.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test"
  }'

# Expected response:
# {"success":true}
```

Or visit https://ckmasangcay.vercel.app and submit the contact form.

---

## Security Notes

- ✅ Credentials are **server-side only** (not exposed in browser)
- ✅ Rate limiting enabled (3 emails/minute per IP)
- ✅ Input validation in place
- ✅ `.env.local` is gitignored (never committed)
- ⚠️ Production keys should be regenerated periodically

### To Regenerate Keys (Optional)

1. Go to https://dashboard.emailjs.com/admin/account/api-keys
2. Click "Regenerate" next to Public Key and Private Key
3. Update Vercel environment variables with new keys
4. No code changes needed

---

## Troubleshooting

**Contact form returns 503 error:**
- Check that `EMAILJS_PRIVATE_KEY` is set in Vercel environment variables
- Verify the key matches what's in your EmailJS dashboard

**Emails not being sent:**
- Check EmailJS template ID is correct
- Verify service ID matches your EmailJS account
- Test with curl command above

**Rate limiting (429 error):**
- Wait 1 minute and try again
- Limit is 3 emails per minute per IP address
