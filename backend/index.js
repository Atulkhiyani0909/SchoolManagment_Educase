// index.js
import express from 'express';
import dotenv from 'dotenv';
import schoolRoutes from './routes/school.routes.js';

dotenv.config();
const app = express();

app.use(express.json());

// Route prefix: /schools
app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
