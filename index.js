const express = require('express');
const cors = require('cors');
require('dotenv').config();

const clientManagementRouter = require('./routes/clientManagement');
const authRouter = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/clients', clientManagementRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 