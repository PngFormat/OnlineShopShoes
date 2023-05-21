import Router from "express"
const router = new Router()
import suppliersController from '../controllers/suppliersController.js'

router.post('/',suppliersController.createSupplier)
router.get('/', suppliersController.getSuppliers)
router.get('/:id', suppliersController.getOneSupplier)
router.put('/', suppliersController.updateSupplier)
router.delete('/:id', suppliersController.deleteSupplier)

export default router