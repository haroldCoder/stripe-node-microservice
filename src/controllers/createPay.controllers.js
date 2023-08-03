"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_controllers_1 = __importDefault(require("./stripe.controllers"));
class CreatePayController extends stripe_controllers_1.default {
    constructor(req, res, success_url, cancel_url, api_key_stripe) {
        super(req, res, api_key_stripe);
        this.createPay = (mode, price, quantity, currency = 'USD', name, priceid) => __awaiter(this, void 0, void 0, function* () {
            switch (mode) {
                case "payment":
                    this.session = yield this.strp.checkout.sessions.create({
                        mode: mode,
                        success_url: this.cancel_url,
                        cancel_url: this.cancel_url,
                        payment_method_types: ['card'],
                        line_items: [
                            {
                                price_data: {
                                    currency: currency,
                                    product_data: {
                                        name: name,
                                        description: name
                                    },
                                    unit_amount: price * 100
                                },
                                quantity: quantity
                            }
                        ]
                    });
                    this.res.status(200).json(this.session.url);
                    break;
                case "subscription":
                    this.session = yield this.strp.checkout.sessions.create({
                        mode: mode,
                        success_url: this.succes_url,
                        cancel_url: this.cancel_url,
                        line_items: [{
                                quantity: 1,
                                price: priceid
                            }]
                    });
                    this.res.status(200).send(this.session.url);
                    break;
            }
        });
        this.api_key_stripe = api_key_stripe;
        this.succes_url = success_url;
        this.cancel_url = cancel_url;
    }
}
exports.default = CreatePayController;
