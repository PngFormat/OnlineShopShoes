import { Suppliers} from "../models/models.js";

class suppliersController {
    async createSupplier(req,res) {
        try{
            const {name, surname, items} = req.body
            console.log(name, surname)
            const createSupplier = await Suppliers.create({name, surname, items})
            res.status(201).json(createSupplier)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getSuppliers(req,res) {
        const getSuppliers = await Suppliers.findAll()
        console.log("suppliers list", getSuppliers)
        res.status(200).json(getSuppliers)
    }

    async getOneSupplier(req,res) {
        // const {id} = req.body
        // await Suppliers.findOne({where: {id}})
        // return res.json(`Supplier with id ${id} `)
    }
    async updateSupplier(req,res) {
        // const {name,surname} = req.body;
        // const sup = await Suppliers.create({name,surname});
        // return res.json(sup)
    }
    async deleteSupplier(req,res) {

    }
}


export default new suppliersController()