const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    facilities: [],
    maxcount: {
      type: Number,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageurls: [],
    currentbookings: [],
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const roomModel = mongoose.model("room", roomSchema);

module.exports = roomModel;
