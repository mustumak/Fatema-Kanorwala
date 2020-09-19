const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req,res)=>{
  res.render("ahome")
});

app.get('/faa-about', (req,res)=>{
  res.render('faa-about')
});

app.get('/contact', (req,res)=> {
  res.render('contact')
});

app.get('/beautify', (req,res)=> {
  res.render('beautify')
});

app.get('/cosmetology', (req,res)=> {
  res.render('cosmetology')
});

app.get('/hair', (req,res)=> {
  res.render('hair')
});

app.get('/make-up', (req,res)=> {
  res.render('make-up')
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port , ()=> {
  console.log("Server has started on port successfully");
});
