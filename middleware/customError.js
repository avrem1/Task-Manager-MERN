const { CustomAPIError } = require("../errors/ErrorClass");
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        console.log("Error is ad asd ", err);
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res
        .status(500)
        .json({ message: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
