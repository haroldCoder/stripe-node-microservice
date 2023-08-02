import {Request, Response, Router} from 'express'
import StripeController from '../controllers/stripe.controllers';

const router = Router();

router.route("/stripe/:api_key")
.get((req: Request, res: Response)=>{
    const {api_key} = req.params;

    new StripeController(api_key).getProduct(req, res);
})

.post()

module.exports = router;