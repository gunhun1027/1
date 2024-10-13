const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// 连接到MongoDB
mongoose.connect('mongodb://localhost:27017/personal_website', { useNewUrlParser: true, useUnifiedTopology: true });

// 中间件
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在运行在 http://localhost:${PORT}`);
});
