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
const stripe_1 = __importDefault(require("stripe"));
class StripeController {
    constructor(api_key) {
        this.getProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const prices = (yield this.strp.prices.list()).data;
            res.status(200).json(prices);
        });
        this.api_key_stripe = api_key;
        this.strp = new stripe_1.default(this.api_key_stripe, {
            apiVersion: '2022-11-15'
        });
    }
}
exports.default = StripeController;
