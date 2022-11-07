const express = require("express"); // import Express
const routes = require("./routes"); // import routes for the server

// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  // sync sequelize to the database
  app.listen(PORT, () => console.log("Now listening"));
});


//ok