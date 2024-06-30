"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDB = void 0;
const addUserToDB = (userName, password, age) => {
    console.log(userName, password);
    return "USer Registration Done";
};
exports.addUserToDB = addUserToDB;
const updateUserData = (objUSer) => {
    console.log(objUSer.name);
    // expect
    return "Update Done";
};
exports.updateUserData = updateUserData;
