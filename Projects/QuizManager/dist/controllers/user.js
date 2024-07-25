"use strict";
// send/ recieve data to/from database via model
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res, next) => {
    console.log(req.body);
    console.log("Resgistration Done");
    res.send("Registration done");
};
exports.registerUser = registerUser;
