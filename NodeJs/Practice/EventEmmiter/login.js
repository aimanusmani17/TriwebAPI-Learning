const  { LOGIN_EVENT, myEventEmitter } = require("./eventFile");

module.exports.loginSuccessful= (userName) => {
    setInterval(()=> {
        myEventEmitter.emit(LOGIN_EVENT,userName)
    },2000)
}