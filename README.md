# Sahyog — Donate to Rural Infrastructure

A full-stack donation platform to support rural infrastructure projects across India. Donors can browse projects, view details, and contribute securely via Stripe.

## Features

-   Browse active projects with progress and details
-   Project detail page with cost breakdown and contact info
-   Secure payments via Stripe Checkout
-   Auth0 for authentication
-   Mobile-friendly, modern UI (Tailwind)

## Tech Stack

-   Client: React + TypeScript + Vite, TailwindCSS, React Router
-   Server: Node.js + Express
-   Data: Supabase
-   Payments: Stripe Checkout
-   Authentication: Auth0

## Local Development

1. Install

-   From repo root, run in each package:
    -   `cd client && npm install`
    -   `cd server && npm install`

2. Run

-   Client: `npm run dev` (in `client/`) → http://localhost:5173
-   Server: `npm run start` (in `server/`) → http://localhost:3000

3. Build

-   Client: `npm run build` (in `client/`) → outputs to `client/dist/`
