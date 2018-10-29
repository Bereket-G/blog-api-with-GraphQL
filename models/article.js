/**
 * Load Module Dependencies
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// Declare Schema For Article
const Article = new Schema({
  title:   { type: String },
  content: { type: String },
  author:  { type: Schema.Types.ObjectId, ref: "Author"},
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

// db hooks
// save(created_at, updated_at), update, delete,
// pre or post cycle
Article.pre("save", function (next){
  let now = (new Date()).toISOString();

  this.created_at = now;
  this.updated_at = now;

  next();
});


// Construct Schema and Collection
// Expose Model 
module.exports = mongoose.model("Article", Article)