# MTG Goat - Commander Playgroup Tracker

MTG Goat is a web application for tracking Magic: The Gathering Commander games between friends. It helps you monitor win rates, deck performance, and overall game balance in your playgroup.

## Features

- **Player Management**: Add and manage players in your playgroup
- **Deck Tracking**: Record commander decks for each player
- **Pod Organization**: Create pods (playgroups) for separate statistics
- **Game Recording**: Log games with participating players, decks, and winners
- **Statistics**: View win rates for players and decks within pods

## Tech Stack

- **Frontend**: Next.js with React, TypeScript, and TailwindCSS
- **Backend**: Next.js API routes with Prisma ORM
- **Database**: PostgreSQL
- **Deployment**: Designed for serverless environments

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/mtg_goat.git
   cd mtg_goat
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your database connection string:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/mtg_goat"
   ```

4. Generate the Prisma client and apply migrations
   ```
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Start the development server
   ```
   npm run dev
   ```

6. Visit `http://localhost:3000` to see the application

## Data Model

- **Player**: Represents a physical Commander player
- **Deck**: A Commander deck owned by a player
- **Pod**: A group of players who play together
- **Game**: A record of a Commander game with players, decks, and a winner

## Deployment

This application is designed to be deployed to serverless environments. You can deploy it to:

- Vercel
- AWS Lambda
- Netlify
- Any other serverless platform that supports Next.js

For the database, you can use:
- AWS Aurora Serverless
- Neon.tech
- Vercel Postgres
- Or any other PostgreSQL-compatible database

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for Magic: The Gathering Commander players
- Inspired by the need to track game balance in playgroups
