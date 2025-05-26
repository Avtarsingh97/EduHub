const { required } = require("joi");
const { Schema, model } = require("mongoose");

const availabilitySchema = new Schema({
  day: {
    type: String,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  startTime: {
    type: String, 
  },
  endTime: {
    type: String, 
  },
});

const serviceSchema = new Schema(
  {
    mentor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      trim: true,
    },
    serviceName: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    duration: {
      type: Schema.Types.Number,
      required: true,
      trim: true,
    },
    courseType: {
      type: Schema.Types.String,
      enum: ["one-on-one", "fixed-course"],
    },
    price: {
      type: Schema.Types.Number,
      required: true,
      trim: true,
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
    // === For one-on-one sessions ===
    availability: [availabilitySchema],

    // === For fixed courses ===
    fromDate: Date,
    toDate: Date,
    fixedDays: [String],
    fixedStartTime: String,
    fixedEndTime: String,
  },
  { timestamps: true }
);

const ServiceModel = model("Service", serviceSchema);

module.exports = ServiceModel;
