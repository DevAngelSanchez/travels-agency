import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import 'dotenv/config';

const app = express();

// database conection
db.authenticate()
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log(error))

// define the port
const port = process.env.PORT || 4000;

// Template Engine
app.set("view engine", "pug");

// get current year
app.use((req, res, next) => {

  const currentYear = new Date().getFullYear();
  res.locals.currentYear = currentYear;

  res.locals.webSiteTitle = "Travels Agency"

  next();
});

// Define public src
app.use(express.static("public"));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Routing
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

