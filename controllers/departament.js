const departamentDb = require(`../models`).DepartamentDb;
const UserDb = require(`../models`).UserDb;

const DepartamentController = {
    addDepartament : async(req, res) => {
        try{
            const departament = {
                nume: req.body.nume,
                director: req.body.director,
                locuriLibere: req.body.locuriLibere
            }
            await departamentDb.create(departament);
            res.status(200).send("A mers");
        }catch(error){
            res.status(500).send("Server errror");
            console.log(error);
        }
    },
    getAllDepartamente: async(req, res) => {
        try{
            let deps = await departamentDb.findAll();
            if(!deps){
                res.status(400).send("Nu exista departamente in baza de date!");
                return;
            }
            res.status(200).send(deps);
        }catch(error){
            res.status(500).send("Server error!");
        }
    },
    getDepartamentById: async(req, res) => {
        try{
            const id = req.params.id;
            let deps = await departamentDb.findByPk(id);
            if(!deps){
                res.status(400).send("Nu exista departamentul cu acest id in baza de date!");
                return;
            }
            res.status(200).send(deps);
        }catch(error){
            res.status(500).send("Server error!");
        }
    },
    deleteDepartament: async(req, res) => {
        try{
            const id = req.params.id;
            const deps = await departamentDb.findByPk(id);
            if(!deps){
                res.status(400).send("Nu exista departamentul cu acest id in baza de date!");
                return;
            }
            const users = await UserDb.findAll({
                where:{
                    id_departament : id
                }
            });
            console.log(users.body);
            if(users.body!=undefined){
                res.status(400).send("Exista useri inregistrati in acest departament. Va rog modificati intai datele acestora.");
                return;
            }
            await departamentDb.destroy({
                where:{
                    id:id
                }
            });
            res.status(200).send("Departamentul a fost sters din baza de date");
        }catch(error){
            res.status(500).send("Server error!");
            console.log(error);
        }
    }
}

module.exports = DepartamentController;