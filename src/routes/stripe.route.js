"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stripe_controllers_1 = __importDefault(require("../controllers/stripe.controllers"));
const createPay_controllers_1 = __importDefault(require("../controllers/createPay.controllers"));
const router = (0, express_1.Router)();
router.route("/stripe/:api_key")
    .get((req, res) => {
    const { api_key } = req.params;
    new stripe_controllers_1.default(req, res, api_key).getProduct();
});
router.route("/stripe")
    .post((req, res) => {
    const { success_url, cancel_url, api_key_stripe, mode, price, quantity, currency, name } = req.body;
    new createPay_controllers_1.default(success_url, cancel_url, api_key_stripe).createPay(mode, price, quantity, currency, name);
});
module.exports = router;
