const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const WilderController = require("./controllers/WilderController");

//DATABASE
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb",{ autoIndex: true,})
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("Hello World");

  app.post("/api/wilder/create", WilderController.create);

  // test a wilder creation
  WilderModel.init().then(() => {
    const firstWilder = new WilderModel({
    name: "First Wilder",
    city: "San Francisco",
    skills: [
      { title: "HTML", votes: 10 },
      { title: "React", votes: 5 },
    ],
  });
})
  firstWilder
    .save()
    .then((result) => {
      console.log("success:", result);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

app.get("/api/wilder/read", WilderController.read);

app.post("/api/wilder/create", WilderController.create);

app.put("/api/wilder/update/:id", WilderController.updateOne);

app.delete("/api/wilder/delete/:id", WilderController.deleteOne)

// start server
app.listen(3000, () => console.log("Server started on 3000"));