# My Health Tracker (PWA starter)

## Included in this first working version
- Mobile-first Next.js PWA shell and install manifest
- Monday meal plan with preparation instructions
- Click a meal to inspect/edit quantities and nutrition values
- Done / Skip / Modified meal logging
- Daily calories, protein, carbs, fat and fibre totals
- Weight and optional waist log
- Editable daily nutrition targets
- Browser notification reminders while the app is open
- JSON export/import backup
- Local browser storage (localStorage)

## Important limitations
- Data is stored in this browser on this device. It does not sync across devices and can be lost if browser site data is cleared. Export backups regularly.
- The starter reminder checks meal times while the app is open. It is not reliable background push scheduling when the app is closed. Proper scheduled push reminders need a push service/server and user subscription.
- Nutrition values are approximate examples. Whey values are placeholders until replaced with the product label. Fish values vary by species. Verify all food entries and cooking oil.
- The seeded menu is Monday only. Add the other six days after confirming the plan and actual food choices.
- This is a personal tracking tool, not a medical device or treatment plan.

## Run locally
1. Install Node.js 20 or later.
2. Extract the zip.
3. Run `npm install`
4. Run `npm run dev`
5. Open `http://localhost:3000`

## Deploy to Vercel
1. Push this folder to a new private GitHub repository.
2. Import the repository in Vercel.
3. Deploy with default Next.js settings.
4. HTTPS is required for PWA installation and notifications.

## Next build phase
Connect Supabase for secure account-based persistence and a server-backed push notification workflow. Add user authentication and database tables before storing medical reports. Do not upload sensitive health reports to a public bucket.
