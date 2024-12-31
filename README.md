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
    DB_NAME=(database_name)
    DB_USER=(your_username)
    DB_PASSWORD=(your_password)
    DB_HOST=127.0.0.1
    PORT=3001
    ```
4. Ensure your MySQL server is running and the database specified in `DB_NAME` exists.
5. Create the database and user:
    1. Open Command Prompt/Terminal as Administrator:
        - Press `Win + X` and select "Command Prompt (Admin)" or "Windows PowerShell (Admin)".
    2. Log into MySQL:
        ```sh
        mysql -u root -p
        ```
        Enter the root password you set during the installation.
    3. Create the database:
        ```sql
        CREATE DATABASE planit;
        ```
    4. Create the user:
        ```sql
        CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
        ```
    5. Grant permissions:
        ```sql
        GRANT ALL PRIVILEGES ON planit.* TO 'your_username'@'localhost';
        ```
    6. Flush privileges:
        ```sql
        FLUSH PRIVILEGES;
        ```
    7. Exit MySQL:
        ```sql
        EXIT;
        ```
6. Start the backend server:
    ```sh
    node src/index.js
    ```

### Frontend
1. Navigate to the [frontend](http://_vscodecontentref_/0) folder:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the [frontend](http://_vscodecontentref_/3) directory with the following content:
    ```plaintext
    REACT_APP_BACKEND_SERVER_URL=http://localhost:3001
    ```
4. Start the frontend development server:
    ```sh
    npm start
    ```

This should set up your environment for the first time and get both the backend and frontend servers running.
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
