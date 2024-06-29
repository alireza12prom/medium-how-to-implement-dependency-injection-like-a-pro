import './routers';
import express from 'express';
import { container } from 'tsyringe';
import { Routers } from './enums/routers';

let app = express();
app.use(express.json());

/** <<<< Routes >>>> */
app.use(container.resolve(Routers.AuthRouter));

/** <<<< Listen to port >>>> */
let PORT = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
  console.log('Server started at: %s', `http://127.0.0.1:${PORT}`);
});