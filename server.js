const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fetch = require('node-fetch');

const app = express();

const port=process.env.PORT||5000;

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.post('/users',(req, res)=>{
   const {query}=req.body;
   fetch(`data.json`)
   .then(response=>response.json())
   .then(data=>res.status(200).json(data))
   .catch(err=>res.status(500).send(err));
});


 
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port:' + port);
});
