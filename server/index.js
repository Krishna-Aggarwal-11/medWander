import express from 'express';
import cors from 'cors';
import {Form , sequelize} from './model/Form.js';
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/submit', async (req, res) => {
    const { formType, name, countryCode, phoneNumber } = req.body;
  
    try {
      const newForm = await Form.create({ formType, name, countryCode, phoneNumber });
      res.status(201).json(newForm);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
