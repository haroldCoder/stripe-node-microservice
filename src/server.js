"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const credentials_1 = require("./configs/credentials");
const app = (0, express_1.default)();
app.use("/api", require("./routes/stripe.route"));
app.listen(credentials_1.PORT, () => {
    console.log(`Server on port ${credentials_1.PORT}`);
});
