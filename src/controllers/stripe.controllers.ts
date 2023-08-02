import { Request, Response } from "express";
import Stripe from "stripe";

class StripeController{
    api_key_stripe: string
    strp: Stripe
    req: Request
    res: Response

    constructor(req: Request, res: Response, api_key: string){
        this.api_key_stripe = api_key;
        this.strp = new Stripe(this.api_key_stripe, {
            apiVersion: '2022-11-15'
        })
        this.req = req,
        this.res = res
    }

    getProduct = async() =>{
        const prices = (await this.strp.prices.list()).data
        this.res.status(200).json(prices)
    }
}

export default StripeController;