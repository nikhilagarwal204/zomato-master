// import { UserModel, ImageModel, ReviewModel } from "./database/allModels";

require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// // http://localhost:5000/
// app.get("/", (req, res) => {
//     return res.json({"WELCOME": `to my Backend Software for the ZOMATO-MASTER`});
// });

// /*
// Route            /movies
// Description      Get all the movies
// Access           PUBLIC
// Parameter        NONE
// Methods          GET
// */
// // http://localhost:5000/movies
// app.get("/movies", async (req, res) => {
//     const getAllMovies = await MovieModel.find();
//     return res.json(getAllMovies);
// });

// /*
// Route            /movies/:id
// Description      Get a single movie
// Access           PUBLIC
// Parameter        NONE
// Methods          GET
// */
// // http://localhost:5000/movie/:id
// app.get("/movie/:id", async (req, res) => {
//     const {id} = req.params;
//     const getMovie = await MovieModel.findOne({_id: id});
//     return res.json(getMovie);
// });

// /*
// Route            /user-register
// Description      Post sinlge user details in users collection
// Access           PUBLIC
// Parameter        NONE
// Methods          POST
// */
// // http://localhost:5000/user-register
// app.post("/user-register", async (req, res) => {
//     const addNewUser = await UserModel.create(req.body);
//     return res.json( {userAdded: addNewUser, message: "User was added !!!"} );
// });

// app.listen(process.env.PORT || 5000, () => {
//     console.log("MY EXPRESS APP IS RUNNING.....")
// });