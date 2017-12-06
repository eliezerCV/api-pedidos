'use strict'

const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('app corriendo en: localhost:3000');
});
