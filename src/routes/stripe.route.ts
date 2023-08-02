import {Request, Response, Router} from 'express'
import StripeController from '../controllers/stripe.controllers';

const router = Router();

router.route("/stripe/:api_key")
.get((req: Request, res: Response)=>{
    const {api_key} = req.params;

    new StripeController(req, res, api_key).getProduct();
})

.post()

module.exports = router;