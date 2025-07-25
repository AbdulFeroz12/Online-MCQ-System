const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🌐 Middleware
app.use(cors());
app.use(express.json());

// 🔌 MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 📦 Routes
const examRoutes = require('./routes/exams');
const resultRoutes = require('./routes/results');
app.use('/api/exams', examRoutes);
app.use('/api/results', resultRoutes);

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const authRoutes = require('./routes/auth'); // ⬅️ Add this line
app.use('/api/auth', authRoutes);           // ⬅️ Register route
