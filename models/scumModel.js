var mongoose = require('mongoose');

var Schema = new mongoose.Schema;

var scumSchema = Schema({
  name: String,
  phone: Number,
  email: String,
  offense: {
  			date: Date,
  			crime: String,
  			details: String

  	}
});