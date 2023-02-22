const express = require('express');
const app = express();

const port = 8000;

app.get('/', (_, res)=> res.send('Akmal Syarifuddin'));

app.listen(port, ()=> console.log(`Service run on port ${port}`));
