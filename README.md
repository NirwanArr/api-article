# Api Articles

## Configuration

To configure the project, ensure you have a `.env` file based on the provided `.env.example`. This file should contain all the necessary environment variables needed for the project.

Example:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=example
DB_NAME=mydatabase
PORT=3000
```

Replace the example values with your actual database credentials and other configuration settings.

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```
This will install all the required packages listed in the package.json file.


Running the Project
To start the project in development mode, use the following command:

```bash
npm run dev
```
This will start the development server with live reloading enabled, allowing you to see changes immediately.

## Database Management
This project uses Sequelize for database management. Below are the commands for handling the database:

Drop the Database
To drop the existing database, use:

```bash
npm run db:drop
```
Create the Database
To create a new database, use:

```bash
npm run db:create
```
Run Migrations
To apply all pending migrations, use:

```bash
npm run db:migrate
```
Seed the Database
To seed the database with initial data, use:

```bash
npm run db:seed
```
Undo Migrations
To revert all applied migrations, use:

```bash
npm run db:migrate:undo
```
Explanation
db:drop: Drops the existing database.
db:create: Creates a new database based on the configuration.
db:migrate: Runs all the migrations that haven't been run yet, creating or altering database tables as necessary.
db:seed: Seeds the database with initial data.
db:migrate:undo: Reverts all applied migrations, effectively rolling back all changes made by migrations.
Ensure you have configured your environment variables correctly before running these commands, especially those related to the database configuration.