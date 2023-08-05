import { Request, Response, Router } from 'express'
import StripeController from '../controllers/stripe.controllers';
import CreatePayController from '../controllers/createPay.controllers';
import Stripe from 'stripe';

const router = Router();

interface StripeData {
    success_url: string,
    cancel_url: string,
    api_key_stripe: string,
    mode: Stripe.Checkout.SessionCreateParams.Mode,
    price: number,
    quantity: number,
    currency: string,
    name: string,
    priceId: string
}

router.route("/stripe/:api_key")
    .get((req: Request, res: Response) => {
        const { api_key } = req.params;

        new StripeController(req, res, api_key).getProduct();
    })

router.route("/stripe")
    .post((req: Request, res: Response) => {
        const { success_url, cancel_url, api_key_stripe, mode, price, quantity, currency, name, priceId }: StripeData = req.body;

        new CreatePayController(req, res, success_url, cancel_url, api_key_stripe).createPay(mode, price, quantity, currency, name, priceId)
    })

module.exports = router;