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

