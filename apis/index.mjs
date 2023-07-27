"use strict";
import express from 'express';
var router = express.Router();

router.get('/',(req, res, next) {
  res.render('index_view', { title: 'Express' });
});

export { router }