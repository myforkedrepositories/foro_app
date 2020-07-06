const mongoose = require('mongoose');
const { Schema } = mongoose;

const TopicSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Topic', TopicSchema)