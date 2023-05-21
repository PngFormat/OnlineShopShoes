import {Router} from "express"
import deviceRouter from "../routes/deviceRouter.js"
import brandRouter from "../routes/brandRouter.js"
import typeRouter from "../routes/typeRouter.js"
import userRouter from "../routes/userRouter.js"
import suppliersRouter from "../routes/suppliersRouter.js";




const router = new Router();

router.use('/user',userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/supplier', suppliersRouter)




export default router;