// const AdmZip = require(`adm-zip`);
// const path = require(`path`);

// const ArchiveController = {
//     createCVArchive: (req, res) => {
//         try{
//             const zip = new AdmZip();
//             zip.addLocalFolder(`.\\files\\uploads`);
            
//         }catch(error){
//             res.status(500).send("Server error!");
//             console.log(error);
//         }
//     }
// }