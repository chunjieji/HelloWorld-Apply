const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = new Schema({
  name: {type: String, require: true},
  specialty: {type: String, require: true},
  sex: {type: String, require: true},
  phone: {type: Number, require: true},
  QQ: {type: Number, require: true},
  firstWish: {type: String, require: true},
  secondWish: {type: String, require: true},
  isAdjust: {type: String, require: true},
  hobby: {type: String, require: true},
  awardExperience: {type: String, require: true},
  joinReason: {type: String, require: true},
})

module.exports = Form = mongoose.model("form", FormSchema)