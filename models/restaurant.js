import mongoose from "mongoose";

/* Mongoose import from */
const RestaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number
    }
  ],
  name: String,
  restaurant_id: String
});

// Création d'un objet Modèle basé sur le schéma
const RestaurantModel = mongoose.model("restaurant", RestaurantSchema);

export default RestaurantModel;

