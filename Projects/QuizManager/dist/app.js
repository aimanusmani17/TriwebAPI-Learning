"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const connectionString = "mongodb+srv://myuser:abcd@mycluster.twqc0pp.mongodb.net/quizApp?retryWrites=true&w=majority&appName=mycluster";
app.use(express_1.default.json());
app.get('/', (res, req) => {
    // tsc  res.send("hi hello");
});
//Redirect / user to userRoute
app.use('/user', user_1.default);
mongoose_1.default.connect(connectionString).then(() => {
    app.listen(process.env.port);
    console.log("Server connected");
});
app.listen(3000);
// mongoose.connect(connectionString(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// app.listen(3000,()=> {
//     console.log("Server Connceted");
// });
// });
