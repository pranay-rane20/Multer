const multer = require("multer");
const path = require("path");

//For DisKStorage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", "public"));
//   },
//   filename: function (req, file, cb) {
//     const uni = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uni + path.extname(file.originalname));
//   },
// });

//For MemoryStorage
const storage = multer.memoryStorage();


function fileFilter(req,file,cb){
  const extname = ['.png','.jpeg','.jpg']
  let ext = path.extname(file.originalname)

  let includedornot = extname.includes(ext);
  if(includedornot){
    cb(null,true)
  }else{
    cb(new Error('these files are not allowed',false))
  }
}


const upload = multer({ storage: storage,fileFilter:fileFilter,limits:{fileSize:2*1024*1024} });
module.exports = upload;