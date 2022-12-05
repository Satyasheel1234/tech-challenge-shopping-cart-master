import express from 'express';
import controller from './controller';
import asyncExceptionHandler from 'express-async-handler';
export default express
  .Router()
  .post('/', asyncExceptionHandler(controller.create))
  .get('/', asyncExceptionHandler(controller.all))
  .get('/:id', asyncExceptionHandler(controller.byId));
