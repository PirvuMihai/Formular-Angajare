const UserDb = require(`../models`).UserDb;

const UserController = {
    addUser: async (req, res) => {
        try {
            const users = {
                nume: req.body.nume,
                prenume: req.body.prenume,
                facultate: req.body.facultate,
                esteTerminata: req.body.esteTerminata,
                experienta: req.body.experienta,
                linkedIn: req.body.linkedIn,
                telefon: req.body.telefon,
                id_departament: req.body.id_departament
            }
            let errMsg = [];
            let errCounter = 0;
            if (users === undefined) {
                errMsg[errCounter++] = "Toate campurile trebuie sa fie completate!";
            }
            if (errCounter > 0) {
                res.status(400).send(errMsg);
                return;
            }
            if (users.nume.length < 2) {
                errMsg[errCounter++] = "Campul nume trebuie sa contina mai mult de 2 litere!";
            }
            if (users.prenume.length < 2) {
                errMsg[errCounter++] = "Campul prenume trebuie sa contina mai mult de 2 litere!";
            }
            if (users.facultate.length < 2) {
                errMsg[errCounter++] = "Campul facultate trebuie sa contina mai mult de 2 litere!";
            }
            if (users.esteTerminata.length != 2) {
                errMsg[errCounter++] = "Campul esteTerminata trebuie sa fie Da/Nu";
            }
            if (!users.linkedIn.includes("www.linkedin.com/")) {
                errMsg[errCounter++] = "Link-ul de linkedIn trebuie sa fie unul valid!";
            }
            if (users.telefon.length != 10) {
                errMsg[errCounter++] = "Numarul de telefon trebuie sa contina 10 caractere.";
            }
            if (errCounter > 0) {
                res.status(400).send(errMsg);
                return;
            }
            await UserDb.create(users);
            res.status(200).send("A mers!");
        } catch (error) {
            res.status(500).send("S-a dus!");
            console.log(error);
        }
    },
    getAllUsers: async (req, res) => {
        const users = await UserDb.findAll();
        if(users === null){
            res.status(404).send("Nu s-au gasit useri");
            return;
        }
        res.status(200).send(users);
    },
    getUsersById: async(req, res) => {
        const id = req.params.id;
        const users = await UserDb.findByPk(id);
        if(users === null){
            res.status(404).send("User-ul cu acest ID nu exista in baza de date");
            return;
        }
        res.status(200).send(users);
    },
    getUsersByDepartamentId: async(req, res) => {
        try{
            const id = req.params.id;
            const users = await UserDb.findAll({
                where:{
                    id_departament: id
                }
            });
            if(!users){
                res.status(404).send("Nu s-au gasit useri in acest departament");
            }
            res.status(200).send(users);
        }catch(error){
            res.status(500).send("Server error!");
        }
    },
    deleteUser: async(req, res) => {
        try{
        const id = req.params.id;
        const user = await UserDb.findByPk(id);
        if(!user){
            res.status(400).send("User-ul nu exista in baza de date!");
            return;
        }
        await UserDb.destroy({
            where:{
                id:id
            }
        });
        res.status(200).send("User-ul a fost sters din baza de date");
        }catch(error){
            res.status(500).send("Server error!");
        }
    }
}
module.exports = UserController;