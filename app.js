const express = require('express');
const upload = require('./config/multer')
const path = require('path')
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/submit', upload.single('avatar') ,(req, res) => {
    console.log(req.body);
    res.send('File uploaded successfully')
})


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})