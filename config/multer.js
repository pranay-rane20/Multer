const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public"));
  },
  filename: function (req, file, cb) {
    const uni = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uni + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
module.exports = upload;