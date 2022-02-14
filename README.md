1. Clone the repo
 * git clone git@github.com:CWoods2909/LIQR.git

2. Install dependencies from the root directory.
 * npm install

3. Create a postgresql user with CREATEDB and PASSWORD
 * CREATE USER auth_app WITH CREATEDB PASSWORD 'password'

4. Create a .env file in the backend directory based on the .env.example file found in the backend root directory.

5. Enter your username and password information into your .env file along with your desired database name, a secure combination for you JWT_SECRET token, and the desired port. (preferably 5000)

6.Add a proxy to your package.json file in your frontend directory, replacing or keeping the 5000 port to match your port configuration from the previous step.
 * "proxy": "http://localhost:5000"

7. Create database, migrate, and seed database models
 * npx dotenv sequelize db:create
 * npx dotenv sequelize db:migrate
 * npx dotenv sequelize db:seed:all

8. Start the backend
 * npm start (in backend directory)

9. Start the frontend directory.  This should open the browser for you.  If not, navigate to http://localhost:3000.
 * npm start (in frontend directory)

10. You can now click demo user and navigate the site, or create a user of your own to begin using LIQR.  Hope you enjoy!


