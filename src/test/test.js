import express from 'express';
import catchify from '../index.js';

const app = express();

app.get('/', catchify(async (req, res) => {
      throw new Error('Test error!');
}));

app.get("/test", (req, res) => {
      throw new Error("Test error from test path.")
})

app.use((err, req, res, next) => {
      res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server running on port 3000'));
