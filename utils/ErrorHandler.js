class ErrorHandler extends Error{
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}


const sendError = (err, res) =>{
    let {statusCode, message} = err;
    let updatedErr = '';
    switch(err.name){
        case 'mongoError':      

        break;
        case 'validationError': 
            updatedErr = {code: 400, msg: err.message}
        break;
        default: 
            break;
    }

    if(updatedErr){
        statusCode = updatedErr.code;
        message = updatedErr.msg;
    }else if(!statusCode){
        statusCode = 500;
        message: 'There is an error! Try again later...'
    }

    res.status(statusCode).json({ 
        status: 'error',
        statusCode, 
        message
    })
}


module.exports = {
    ErrorHandler,
    sendError
}