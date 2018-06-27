"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = function (val) {
    var port = (typeof val === 'string') ? parseInt(val) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
};
exports.onError = function (addr) {
    return function (error) {
        if (error.syscall !== 'listen')
            throw error;
        var bind = (typeof addr.port === 'string') ? "pipe " + addr.port : "port " + addr.port;
        switch (error.code) {
            case 'EACCES':
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
};
exports.onListening = function (addr) {
    return function () {
        var bind = (typeof addr === 'string') ? "pipe " + addr : "port " + addr.port;
        console.log("Listening at " + bind);
    };
};
