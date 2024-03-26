const { Schema, model } = require("mongoose");

const packSchema = new Schema({
    id: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: String, required: true },
    title: { type: String, required: true },
    time: { type: String, required: true },
    courses: { type: String, required: true },
    SNo: { type: String, required: true }
});

const Package = new model("Package", packSchema);

module.exports = Package;