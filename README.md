# README
A simple RESTful API using Node, Express, Sequelize, JWT and built with layered architecture. Provides endpoints to the basic CRUD (Create, Read, Update, Delete) operations for blog posts.

# Features
* Endpoints to create and delete an user
* Endpoints to create, update, read and delete blog posts
* Endpoints to search a specific post by category, title or content

# Tech specs
* Software Architecture: Model, Service, Controller (Layered Architecture)
* Node 16 / Express 4.17.1
* Sequelize 6.3.4 / mysql2 2.1
* JWT

# Usage and basic commands
1) Clone the repository to your local: 
`git clone git@github.com:lionffl/blogsapi.git`
2) Installing dependecies:
`npm install`
3) Config the enviroment by renaming `env.example` to `.env` and setting the variables
4) Creating and migrating db:
`npm run prestart`
5) Seeding with data:
`npm run seed`
6) Run in debug mode (nodemon):
`npm run debug` or
7) Just run:
`npm start`
