# My Health Tracker (PWA)

## Features
- Mobile-first Next.js PWA
- Monday meal plan with editable food quantities
- Done / Skip / Modified meal logging
- Daily calories, protein, carbs, fat and fibre totals
- Weight and waist history
- Local browser storage
- Google Drive automatic backup after each saved meal log or measurement
- Manual restore from Google Drive
- Browser-side AES-GCM encryption; password-derived key uses PBKDF2-SHA256

## Google Drive setup
1. Open Google Cloud Console and create/select a project.
2. Enable the Google Drive API.
3. Configure the OAuth consent screen. Add your Google account as a test user while the app is in Testing.
4. Create an OAuth Client ID with application type Web application.
5. Add your deployed Vercel domain as an Authorized JavaScript origin (for example, https://your-app.vercel.app). Also add http://localhost:3000 for local testing if needed.
6. In the app, open Settings, paste the OAuth Web Client ID, create a backup password of at least 10 characters, then select Connect Google Drive.
7. Save a meal log or measurement. The app updates one encrypted backup file in the private Drive appDataFolder.
8. On a new device, open Settings, connect the same Google account, enter the same backup password and select Restore from Google Drive.

The app requests the narrow Google Drive drive.appdata scope. It stores one file named my-health-tracker-backup.json in the app-specific hidden area of Drive, not in the user's normal Drive file list.

## Important security and reliability notes
- Your backup password is not uploaded. If you forget it, the encrypted backup cannot be recovered.
- The app does not store the backup password or Google access token persistently.
- Google access tokens expire. When this happens, reconnect Google Drive from Settings. Local logging continues to work while disconnected.
- Automatic backup runs after a meal log or measurement is saved, while the app is open and Google authorization is valid. It is not a background job.
- Restore replaces local meal logs and measurement history; it does not merge records. Preserve local data before restoring if it matters.
- Keep your backup password private. Do not commit OAuth secrets or passwords to GitHub. The OAuth Web Client ID is public configuration, not a client secret.
- Drive backup is an additional copy, not a substitute for medical record storage or a clinical system.

## Run locally
1. Install Node.js 20 or later.
2. Run npm install.
3. Run npm run dev.
4. Open http://localhost:3000.

## Deploy to Vercel
1. Import the GitHub repository into Vercel.
2. Deploy with default Next.js settings.
3. In Google Cloud Console, add the exact Vercel domain as an Authorized JavaScript origin.
4. Use HTTPS for production and PWA installation.

## Nutrition disclaimer
Nutrition values are approximate examples. Whey values are placeholders until replaced with the product label. Fish values vary by species. This is a personal tracking tool, not a medical device or treatment plan.
