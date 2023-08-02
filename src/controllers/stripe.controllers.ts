import { Request, Response } from "express";
import Stripe from "stripe";

class StripeController{
    api_key_stripe: string
    strp: Stripe

    constructor(api_key: string){
        this.api_key_stripe = api_key;
        this.strp = new Stripe(this.api_key_stripe, {
            apiVersion: '2022-11-15'
        })
    }

    getProduct = async(req: Request, res: Response) =>{
        const prices = (await this.strp.prices.list()).data
        res.status(200).json(prices)
    }
}

export default StripeController;