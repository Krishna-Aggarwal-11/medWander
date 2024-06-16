import express from 'express';
import cors from 'cors';
import XLSX from 'xlsx';
import {Form , sequelize} from './model/Form.js';
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());



// Routes

// testing route
app.get('/', (req, res) => {
  res.send('Welcome');
});

// Submit form

app.post('/submit', async (req, res) => {
    const { formType, name, countryCode, phoneNumber } = req.body;
  
    try {
      const newForm = await Form.create({ formType, name, countryCode, phoneNumber });
      res.status(201).json(newForm);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get all form entries

  app.get('/form', async (req, res) => {
    try {
        const entries = await Form.findAll();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
