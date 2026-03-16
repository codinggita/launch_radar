require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const { Product, Prediction, Signal, Analytics } = require('./models');

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for migration');

    const rawData = fs.readFileSync('./data_store.json');
    const data = JSON.parse(rawData);

    // Clear existing data
    await Product.deleteMany({});
    await Prediction.deleteMany({});
    await Signal.deleteMany({});
    await Analytics.deleteMany({});

    // Seed new data
    await Product.insertMany(data.products);
    await Prediction.insertMany(data.predictions);
    await Signal.insertMany(data.signals);
    await Analytics.create(data.analytics);

    console.log('Data migration successful!');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
};

migrate();
