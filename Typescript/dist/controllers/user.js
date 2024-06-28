"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUSer = void 0;
const user_1 = require("../models/user");
const registerUSer = (req, res) => {
    // fetch data from request
    // validation
    // normalize
    const userName = "Aiman";
    const password = "password";
    const result = (0, user_1.addUserToDB)(userName, password);
    res.send("USer Registration ");
};
exports.registerUSer = registerUSer;
