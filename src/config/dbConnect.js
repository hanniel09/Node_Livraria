import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Hanniel:1227@cluster0.rf79gk7.mongodb.net/Node_estudos");

let db = mongoose.connection;

export default db;
