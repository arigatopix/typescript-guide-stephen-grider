import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
