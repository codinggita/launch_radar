const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  tag: { type: String },
  tagClass: { type: String },
  bgClass: { type: String },
  rating: { type: Number, default: 0 },
  reviews: { type: mongoose.Schema.Types.Mixed, default: 0 },
  demand: { type: Number, default: 0 },
  specs: [{ label: { type: String } }],
  tags: [String]
}, { timestamps: true });

const predictionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  prob: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

const signalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true }
}, { timestamps: true });

const analyticsSchema = new mongoose.Schema({
  chartData: [{
    name: { type: String },
    value: { type: Number }
  }],
  accuracy: { type: String },
  activePredictions: { type: Number }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
const Prediction = mongoose.model('Prediction', predictionSchema);
const Signal = mongoose.model('Signal', signalSchema);
const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = { Product, Prediction, Signal, Analytics };
