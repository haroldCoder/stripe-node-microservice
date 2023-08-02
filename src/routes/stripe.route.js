"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stripe_controllers_1 = __importDefault(require("../controllers/stripe.controllers"));
const router = (0, express_1.Router)();
router.route("/stripe/:api_key")
    .get((req, res) => {
    const { api_key } = req.params;
    new stripe_controllers_1.default(api_key).getProduct(req, res);
})
    .post();
