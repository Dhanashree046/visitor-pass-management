const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({

  name: String,

  phone: String,

  email: String,

  company: String,

  type: String,

  purpose: String,

  date: String,

  department: String,

  checkIn: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Visitor", VisitorSchema);