"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: '.env'
});
exports.app = (0, express_1.default)();
(0, db_1.connectToDB)().then(() => {
    exports.app.listen(process.env.PORT || 8000, () => {
        console.log("Server is started on port", process.env.PORT || 8000);
    });
})
    .catch((error) => {
    console.log(error.message);
    process.exit(1);
});
