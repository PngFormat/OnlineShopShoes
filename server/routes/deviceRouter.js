import {Router} from "express"
import deviceController from "../controllers/deviceController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.post('/',deviceController.create)
router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)
router.delete('/:id',deviceController.deleteOne)


export default router;