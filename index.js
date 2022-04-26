
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./views/swagger.json");

//Express
const app = express();

//Set Port
const PORT = process.env.PORT || 3000;

//Body Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Set Routes
require("./routes")(app);

//SwaggerUi
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Run Server
app.listen(PORT, console.log(`Server Start \n>> http://localhost:${PORT}/api`));

module.exports = app;
