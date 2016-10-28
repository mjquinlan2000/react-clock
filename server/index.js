import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'app/components/App';

const app = express();

console.log(__dirname)

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
  res.render('index', {body: renderToString(<App/>)});
});

export default app;
