# planit

## Overview
This is an events app where you can see current and future events. Some events are private, some are public, some are free and open to everyone, and some cost money. Users can post events, give admin access to others, friend people, message them, and chat in group chats for events they RSVP to. The app sends reminders about event times and locations, and allows users to post photos of events.

## Project Structure
- `frontend/`: Contains the React frontend code.
- `backend/`: Contains the Express backend code.

## Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MySQL

### Backend
1. Navigate to the `backend` folder:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following content:
    ```plaintext
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=127.0.0.1
    PORT=3001
    ```
4. Ensure your MySQL server is running and the database specified in `DB_NAME` exists.
5. Start the backend server:
    ```sh
    node src/index.js
    ```

### Frontend
1. Navigate to the `frontend` folder:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
- Access the frontend at `http://localhost:3000`.
- The backend server runs at `http://localhost:3001`.

## Features
- View current and future events. (WIP)
- Post events and manage them. (WIP)
- Friend people and message them. (WIP)
- Group chats for events. (WIP)
- Event reminders. (WIP)
- Post and view event photos. (WIP)
- Search for events by type, name, planner, and location. (WIP)
- Ticketing system for private events. (WIP)
