const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', taskSchema);
