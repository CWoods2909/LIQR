# Liqr

Liqr is a website of my own creation.  My idea for this site came about by wanting to try out and experiment with new drinks, and also save the recipes of drinks that I like. 

# Features

- A user login, sign up, or log in as a demo user.
- Create, Read, Update, Delete
  - Cocktails
  - DrinkList

# Upcoming features

- Search, and reviews

# Technologies Used

- React
- Redux
- JavaScript
- PostgreSQL
- Express
- CSS

# Splash Page

- From the splash page a user can either log-in, sign-up, or choose demo. Only the splash page is accessable without being logged in.
  ![image](https://user-images.githubusercontent.com/83300311/163845188-3c845459-6d53-4755-a6ad-e42ac1d62099.png)


# Home Page

- Upon logging in, a user can see their drink list, browse to either all the cocktails or create a cocktail.
  ![image](https://user-images.githubusercontent.com/83300311/163845408-ae4b04a0-0a36-40f6-8656-aea3dec329dc.png)
  ![image](https://user-images.githubusercontent.com/83300311/163845483-b2fd5b3d-78d7-40c3-8ef7-d872bdb12d0c.png)


# All drinks page

- Upon navigating to the drinks page, and user can browse all the current drinks on the site.
  ![image](https://user-images.githubusercontent.com/83300311/163845651-c8c775f9-faad-4515-a9c3-265836119f0a.png)
  
# Single drink page
- If the user clicks on a drink it will take them to that drink page, where they can view the ingredients, and directions.  A user can also add the drink to their drink list, or, if they made the drink, can edit or delete it.

![image](https://user-images.githubusercontent.com/83300311/163845950-291bca61-d46d-44fc-a648-ec1a7415b586.png)
![image](https://user-images.githubusercontent.com/83300311/163846022-87e95321-2a4f-4034-a4b8-8fca7f122fd8.png)


## Getting started(If you want to clone down the repo yourself.)

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


