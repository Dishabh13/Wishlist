Simple Wishlist App ✨

A clean, minimal, accessible wishlist tracking web app built using React, Vite, Tailwind CSS, and Supabase/localStorage for data persistence.

✨ Features

Minimal Modern UI: Soft colors, rounded cards, clean spacing

Frontend Powered: Built using React + Vite with Tailwind styling

Optional Backend: Uses Supabase OR localStorage for wishlist persistence

Accessible: Fully keyboard-friendly, ARIA-labeled inputs, focus styles

Responsive: Mobile-first layout with smooth scaling

Interactive: Add, mark done/undo, delete wishes with instant UI updates

🚀 Quick Start
Prerequisites

Node.js (v18 or higher)

Optional: A Supabase account (if using Supabase backend)

Installation
1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

2. Install dependencies
npm install

3. Set up Supabase (Optional)

If using Supabase instead of localStorage:

Your wishlist table should include:

id – UUID (primary key)

item_name – text (required)

reason – text (optional)

is_done – boolean (default false)

created_at – timestamp with timezone (default now())

RLS Policies:
Already handled by Lovable/Supabase templates:

CREATE POLICY "Public can insert wishes"
ON public.wishlist FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view wishes"
ON public.wishlist FOR SELECT USING (true);


Environment Variables:

VITE_SUPABASE_URL=<your-url>
VITE_SUPABASE_ANON_KEY=<your-anon-key>

4. Run the development server
npm run dev


Now open:
👉 http://localhost:5173
 (or whichever port Vite shows)

🏗️ Project Structure
src/
├── components/
│   ├── WishForm.jsx          # Form for adding new wishes
│   ├── WishCard.jsx          # Card UI for displaying each wish
│   └── EmptyState.jsx        # Shown when no wishes exist
├── lib/
│   ├── localStorage.js       # Handles load/save to localStorage
│   └── supabaseClient.js     # Only if using Supabase backend
├── pages/
│   └── App.jsx               # Main page layout (heading, form, wishlist)
├── index.css                 # Tailwind + custom styles
└── main.jsx                  # Root React entry

🎨 Design System

Your Simple Wishlist App uses a soft, modern UI:

Colors

Primary: Soft purple / plum

Secondary: Light grey

Background: White with subtle shadows

UI Elements

Rounded cards with smooth hover lift

Animated buttons

Clean, large input fields

Success messages + instant UI feedback

Micro-Interactions

Button press scaling

Card hover glow

Smooth transitions for add / delete / toggle

🔒 Security & Best Practices

No credentials hardcoded (Supabase values stored in .env)

Clean client-side validation (item name required)

Debounced submit (prevents double-click spam)

RLS policies applied if Supabase is used

Semantic HTML + keyboard accessibility

📝 Usage
Add a Wish

Enter What do you wish for? and the Reason → Click Add to Wishlist.

Mark as Done

Click the Done (or Undo) button on the wish card.

Delete

Click the Delete icon to permanently remove the wish.

Persistence

If Supabase is used → Data syncs online

If localStorage is used → Wishes remain after refresh

🚢 Deployment
Option 1: Lovable Deployment (Recommended)

Click the Publish button in Lovable UI.

Option 2: Vercel Deployment
npm run build
vercel --prod

Option 3: Netlify Deployment
npm run build
netlify deploy --prod --dir=dist

🛠️ Development Commands
npm run dev       # Start development server
npm run build     # Build production files
npm run preview   # Preview production build

📌 Project Info:
https://lovable.dev/projects/124ac2c3-7788-44bc-8b84-fce3d2b6f65c?magic_link=mc_369e34ce-d3a9-4162-8621-db462775ec74
