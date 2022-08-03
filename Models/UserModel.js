const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userschema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    type: {
      type: String,
    },
    photo: {
      type: String,
   
    },
    phone: {
      type: Number,
     
    
      
  
      
    },
    isAdmin:{
      type: Boolean,
      default:true,
    
    },
    address: {
      type: String,
      minLength: 4,
      default:"No address"
    },
   
    msgs:{
      type:Array,
      default:["start"]
    }
    ,
    rf_Token:{
      type:String,
      
    }
  },
  {
    timestamps: true,
  }
);

// Login
userschema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
userschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userschema.path('phone').validate(function(v) {
  if (v <1111) {
    throw new Error('Need Christmas');
  }
  return true;
}, 'Name `{VALUE}` is not valid');

userschema.path('phone').validate(function(value) {
  // When running in `validate()` or `validateSync()`, the
  // validator can access the document using `this`.
  // Does **not** work with update validators.
  if (this.phone < 7777777) {
    return false;
  }
  return true;
});
const User = mongoose.model("User", userschema);
module.exports = User;
