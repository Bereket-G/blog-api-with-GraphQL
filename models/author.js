/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Declare Schema For Author
const Author = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  country:  { type: String },
  date_of_birth: { type: Date },
  created_at: { type: Date },
  updated_at: { type: Date }
});

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Author.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;

  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Author", Author);