"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesAndInterface = exports.registerUSer = void 0;
const user_1 = require("../models/user");
const registerUSer = (req, res) => {
    // fetch data from request
    // validation
    // normalize
    const userName = "Aiman";
    const password = "password";
    const age = 30;
    const result = (0, user_1.addUserToDB)(userName, password, age);
    res.send("USer Registration ");
};
exports.registerUSer = registerUSer;
const checkTypesAndInterface = (req, res) => {
    let num = { x: 2, y: 4 };
    num.x = 3;
    let xState = "locked";
    const myUSer = {
        id: 1,
        name: "aiman",
        password: "string",
        age: 25,
        is_active: false,
        accountStatus: ""
    };
    const result = (0, user_1.updateUserData)(myUSer);
    res.send(result);
};
exports.checkTypesAndInterface = checkTypesAndInterface;
