import {Brand} from "../models/models.js"

class BrandController{

    create = async(req,res) => {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand)
    }

    getAll = async(req,res) =>{
       const brands = await Brand.findAll()
       return res.json(brands)
    }
        
    deleteOne = async(req,res) => {
        const {id} = req.params
        await Brand.destroy({where: {id}})
        return res.json(`Brand with id ${id} has been removed`)
    }   



    
}
export default new BrandController()