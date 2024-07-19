
// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");

// Create our app object
const app = express();

// set up middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

//declare a variable for our port number
const PORT = 4000;

// App Listen
app.listen(PORT, ()=> {
  console.log(`Listening to port ${PORT}`);
});  
