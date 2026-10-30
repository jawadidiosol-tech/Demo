# To-Do App

A simple to-do list web page. Tasks are stored in a Supabase database and the site is hosted on Vercel.

## Files

- `index.html`: the page layout and styling
- `app.js`: connects to Supabase, loads tasks, and adds new ones
- `README.md`: this description

## Setup

1. Create a Supabase project and run the SQL that creates the `todos` table (see the Supabase SQL Editor).
2. Open `app.js` and set `SUPABASE_URL` and `SUPABASE_KEY` to your Project URL and publishable key.
3. Open `index.html` in a browser to test locally, or deploy the project on Vercel.

## Notes

The publishable key is safe to use in the browser because Row Level Security is enabled on the `todos` table. Never put the secret key in this project.
