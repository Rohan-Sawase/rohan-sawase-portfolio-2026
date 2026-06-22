# Rohan Sawase Portfolio - Setup Guide

## 1. Install dependencies
```
npm install
```

## 2. Environment variables
Copy .env.example to .env and fill in your Supabase credentials:
- Create a free project at https://supabase.com
- Get URL + anon key from Project Settings > API

## 3. Database setup
Create these tables in Supabase SQL Editor:

```sql
create table contact_messages (
  id serial primary key,
  name text not null,
  email text not null,
  subject text default '',
  message text not null,
  created_at timestamptz default now()
);

create table site_stats (
  id integer primary key,
  visitors integer default 0
);

insert into site_stats (id, visitors) values (1, 0);
```

## 4. Run locally
```
npm run dev
```

## 5. Build for production
```
npm run build
```

## 6. Deploy
Deploy to Vercel (https://vercel.com) - import the folder and deploy.
Add the same environment variables in Vercel project settings.
