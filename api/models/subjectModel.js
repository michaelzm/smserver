"use strict"
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subjectName:{
        type: String
    },
    dateCreates: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Subject", SubjectSchema);