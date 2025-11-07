// app.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hello from ArgoCD!';
const VERSION = process.env.VERSION || 'v1.0.0';

app.get('/', (req, res) => {
  res.json({
    message: MESSAGE,
    version: VERSION,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
