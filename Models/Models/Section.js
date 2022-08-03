const mongoose=require("mongoose") ;
const articleSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: Number,
    require: true,
  },
  content: {
    type: String,
    require: true,
  }},
  {
    timestamps: true,
  }
);
const sectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    pic: {
      type: String,
      require: true,
    },
    urlname: {
      type: String,
      require: true,
    },
    articles: [articleSchema],
  },
  {
    timestamps: true,
  }
);
const sect = mongoose.model("sect", sectionSchema);
module.exports= sect;
