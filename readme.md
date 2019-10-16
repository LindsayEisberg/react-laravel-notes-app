# Notes App

A Note application build with React & Laravel

## To Begin

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:LindsayEisberg/react-laravel-notes-app.git
```

If you use https, use this instead

```bash
git clone https://github.com/LindsayEisberg/react-laravel-notes-app.git
```

After cloning, navigate to the new project directory and run:

```bash
composer install
```

```bash
npm install && npm run dev
```

Duplicate `.env.example` and rename it `.env`
```bash
cp .env.example .env
```

Then run:

```bash
php artisan key:generate
```

### Before the application can run correctly:

Be sure to fill in your database details in your `.env` file before running the migrations.

Edit the following fields:
``` bash
DB_DATABASE=[ENTER NAME OF DATABASE]
DB_USERNAME=[ENTER USERNAME]
DB_PASSWORD=[ENTER PASSWORD OR LEAVE BLANK (depending on your config)]
```

```bash
php artisan migrate
```

And finally, start the application:

```bash
php artisan serve
```
## To View the App
visit [http://127.0.0.1:8000](http://127.0.0.1:8000) to view the notes app.

## To Perform Unit Tests
Unit tests have been written using Cypress.

### To start
make sure server is still running. Then, in the command line, 
```bash
npm run test
```
When the cypress window opens, use the two links to run the unit tests that have been created.  Current tests include'
* Making sure app exists, and seeding dummy data as the list of notes
* routing to the Create New Note route, filling in the input and textarea fields, then submitting the form and redirecting back to the list of notes.

