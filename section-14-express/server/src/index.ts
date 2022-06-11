import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/loginRoutes';

const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
