const express = require('express');
const upload = require('./config/multer')
const path = require('path')
const app = express();
const userModel = require('./models/userModel')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

//For DiskStorage
// app.post('/submit', upload.single('avatar') ,async (req, res) => {
//     console.log(req.file);
//     const user = await userModel.create({
//         name: req.body.username,
//         image:req.file.filename
//     })
//     res.send(user);
// })

//For MemoryStorage
app.post('/submit', upload.single('avatar') ,async (req, res) => {
    console.log(req.file);


    let newbuffer = await sharp(req.file.buffer)
    .resize(1920)
    .toBuffer()

    const user = await userModel.create({
        name: req.body.username,
        //original without changing file size
        // image:req.file.buffer
        //after changing file size
        image : newBuffer
    })
    res.send(user);
})


app.listen(3000, () => {
    console.log("Server listening on port 3000")
})