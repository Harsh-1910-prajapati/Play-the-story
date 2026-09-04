# 🎭 Play the Story

**Play the Story** is a modern interactive storytelling web application built with **Next.js, React, Tailwind CSS, and Supabase**.

The project is designed to provide an engaging platform where users can explore and experience stories through a clean, interactive, and responsive interface.

## ✨ Features

* 📖 Interactive storytelling experience
* 🎨 Modern and responsive UI
* ⚡ Fast performance with Next.js
* 📱 Mobile-friendly design
* 🔐 Supabase integration
* 🗄️ Database-ready architecture
* 🧩 Reusable React components
* 🎯 Clean and organized project structure

## 🛠️ Tech Stack

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React**

### Backend & Database

* **Supabase**
* **Supabase JavaScript Client**

### Tools

* **Git**
* **GitHub**
* **ESLint**
* **npm**

## 📂 Project Structure

```text
Play-the-story/
│
├── public/          # Static assets
├── src/             # Application source code
├── supabase/        # Supabase configuration/database files
│
├── .env.example     # Environment variable example
├── package.json     # Project dependencies and scripts
├── next.config.ts   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
├── eslint.config.mjs
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Harsh-1910-prajapati/Play-the-story.git
```

### 2. Navigate to the project

```bash
cd Play-the-story
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file and add the required Supabase environment variables.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_SITE_URL=https://playthestory.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

> Never commit your real `.env.local` file or secret credentials to GitHub.

The service-role key is server-only. Do not prefix it with `NEXT_PUBLIC_` or use
it in client components. Create the admin user in Supabase Auth and set
`app_metadata.role` to `admin`; the application does not use a custom password
store.

### 5. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start development server         |
| `npm run build` | Build the production application |
| `npm run start` | Start production server          |
| `npm run lint`  | Run ESLint                       |

## 🗄️ Supabase

This project uses **Supabase** for backend/database functionality.

The `supabase/` directory contains project-related Supabase configuration and database resources.

Run `supabase/schema.sql` in the Supabase SQL editor to create the relational
content model, indexes, update triggers, and Row Level Security policies. Public
content is readable only when published; administrative database access requires
a Supabase Auth user with `app_metadata.role = 'admin'` or a trusted server-side
service-role request.

## 🌐 Deployment

This project is designed for **GitHub → Vercel → Supabase/Cloudinary** deployment.

1. Run `supabase/schema.sql` in the production Supabase project.
2. Create the admin user in Supabase Auth and set `app_metadata.role` to `admin`.
3. In Supabase Auth URL Configuration, set the Site URL to `NEXT_PUBLIC_SITE_URL`.
4. Add the production URL and local development URL to the allowed redirect URLs.
5. Import the GitHub repository into Vercel and set the variables listed above for Production.
6. Deploy, then verify public routes, the contact form, admin login, and Cloudinary uploads.

The application does not include a Vercel-specific rewrite or custom server. The
default Next.js build command (`next build`) and output settings are sufficient.

## 🔒 Environment Variables

For security, keep sensitive credentials outside the repository.

Use:

```text
.env.local
```

and provide only safe example values in:

```text
.env.example
```

## 👨‍💻 Author

**Harsh Prajapati**

* GitHub: [Harsh-1910-prajapati](https://github.com/Harsh-1910-prajapati)

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.


**Built with ❤️ using Next.js, React, Tailwind CSS & Supabase.**
