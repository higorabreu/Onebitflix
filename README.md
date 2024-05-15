# Streaming API

This is a Node.js API for a streaming application, providing endpoints to manage users, categories, courses, episodes, profiles, favorites, likes, and user account information.

## Technologies Used

- Node.js
- Express
- Sequelize
- PostgreSQL

## Features

- User authentication via JWT token
- Management of categories and courses
- Control of viewing progress of episodes
- User profile management and "Continue Watching" list
- Favorites and likes list

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/higorabreu/streaming-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd streaming-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Ensure PostgreSQL is installed on your machine.
5. Access PostgreSQL as the superuser:
   ```bash
   sudo -u postgres psql
   ```
6. Inside the PostgreSQL shell, create a new user 'streaming' with the ability to create databases and an encrypted password:
   ```sql
   CREATE USER streaming WITH CREATEDB ENCRYPTED PASSWORD 'streaming';
   ```
7. Exit the PostgreSQL shell.
8. Create the database using Sequelize CLI:
   ```bash
   npx sequelize-cli db:create
   ```
9. Run migrations to create tables in the database:
   ```bash
   npx sequelize-cli db:migrate
   ```
10. Seed the database with initial data:
   ```bash
   npx sequelize db:seed:all
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

## Postman Collection

You can use the provided Postman collection to test the endpoints of the streaming API.

[![Run in Postman](https://run.pstmn.io/button.svg)]([https://elements.getpostman.com/redirect?entityId=28919232-627263f4-bafb-4d5b-82be-e6ba8e41e686&entityType=collection](https://www.postman.com/dark-robot-470395/workspace/higor-abreu/collection/28919232-627263f4-bafb-4d5b-82be-e6ba8e41e686?action=share&creator=28919232))

Click the button above to import the collection into your Postman application.
