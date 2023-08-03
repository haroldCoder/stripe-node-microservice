import {request, response} from "express";
import StripeController from "./stripe.controllers";
import Stripe from "stripe";

interface LineItem {
    quantity: number;
    amount: number;
    name: string;
    currency: string;
}

class CreatePayController extends StripeController{
    api_key_stripe!: string;
    session!: Stripe.Response<Stripe.Checkout.Session>
    succes_url: string
    cancel_url: string

    constructor(req: Request | any, res: Response | any, success_url: string, cancel_url: string, api_key_stripe: string ){
        super(req, res, api_key_stripe);
        this.api_key_stripe = api_key_stripe;
        this.succes_url = success_url;
        this.cancel_url = cancel_url;
    }

    createPay = async(mode: Stripe.Checkout.SessionCreateParams.Mode, price?: number, quantity?: number, currency: string = 'USD', name?: string, priceid?: string) =>{
        

        switch(mode){
            case "payment":
                this.session = await this.strp.checkout.sessions.create({
                    mode: mode,
                    success_url: this.cancel_url,
                    cancel_url: this.cancel_url,
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: currency,
                                product_data:{
                                    name: name!,
                                    description: name!
                                },
                                unit_amount: price! * 100
                            },
                            quantity: quantity
                        }
                    ]
                })
                
                this.res.status(200).json(this.session.url);
                break;
            case "subscription":
                this.session = await this.strp.checkout.sessions.create({
                    mode: mode,
                    success_url: this.succes_url,
                    cancel_url: this.cancel_url,
                    line_items: [{
                        quantity: 1,
                        price: priceid
                    }]
                })
                this.res.status(200).send(this.session.url);
                break;
        }
    }
}

export default CreatePayController;