import express from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../controllers'
import { Routers } from '../enums/routers';

let router = express.Router();
let controller = container.resolve(AuthController);

router.post(
  '/auth/login', 
  controller.login.bind(controller)
);

/** Register `router` instance to tsyringe */
container.registerInstance(Routers.AuthRouter, router);