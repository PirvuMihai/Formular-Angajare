const router = require(`express`).Router();
const multer = require(`multer`);

const path = require(`path`);

let uploadCV = multer({
    storage: multer.diskStorage({
    destination: './CVs',
    filename: (req, file, callback) => {
        const fileExt = path.extname(file.originalname);
        callback(
            null,
            req.body.nume + "_" + req.body.prenume + "_" + req.body.id_departament + fileExt
        );
    },
}),
    limits: { fileSize: 5000000 }, //filesize set to 5MB
    
    fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        if(ext.toLowerCase!=='pdf'){
            return callback(new Error("Only pdf files allowed!"));
        }
        callback(null, true);
    }
}).single("CV");

module.exports = uploadCV;