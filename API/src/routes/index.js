import { Router } from "express";
const router = Router();
import privateProduct from './private/privateProduct.js'
import publicProduct from './public/productPublic.js'
import privateUser from './private/privateUser.js'
import publicAuth from './public/publicAuth.js'

//private
router.use('/privateProduct', privateProduct)
router.use('/privateUser', privateUser)


//public
router.use('/publicProduct', publicProduct)
router.use('/publicAuth', publicAuth)


export default router;