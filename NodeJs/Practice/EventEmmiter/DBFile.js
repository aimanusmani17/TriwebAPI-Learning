const  { EventEmitter, LOGIN_EVENT, myEventEmitter } = require("./eventFile");

myEventEmitter.on(LOGIN_EVENT, (userName)=>{

    console.log("writing in for DB:", userName);
});