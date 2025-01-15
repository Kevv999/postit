# Post and Commenting App

![image](https://github.com/user-attachments/assets/9a0c292d-a942-434c-98c7-57b1e7897da3)

https://github.com/user-attachments/assets/34f7058d-39e5-4504-b618-dc1f081e44ee


## Description

This project allows users to create, delete, and comment on posts. Users must log in using their Google account via Google OAuth with Prisma and Supabase as the backend for managing the data. 

## Features

- **User Authentication**: Users can sign in using their Google account with OAuth authentication.
- **Create Posts**: Authenticated users can create posts.
- **Delete Posts**: Users can delete their own posts.
- **Comment on Posts**: Users can comment on other people's posts.
  
## Technologies Used

- **Prisma**: ORM for database management.
- **Supabase**: User management, data storage.
- **Google OAuth**: Google login for user authentication through Prisma.

## Installation

### 1. Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Kevv999/postit.git
```
### 2. Navigate to the project directory and install dependencies:
```bash
npm install
```
### 3. Set up environment variables
Set up the environment variables for Supabase and Prisma. Create a .env file in the root of your project and add the following:
```bash
DATABASE_URL=<your-database-url>
SUPABASE_URL=<your-supabase-url>
SUPABASE_ANON_KEY=<your-supabase-anon-key>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```
### 4. Run Prisma migrations
Run the following command to set up your database schema:
```bash
npx prisma migrate dev
```
### 5. Start the development server
```bash
npm run dev
```
# License
You can freely use, modify, and distribute this project for any purpose, with no restrictions.

