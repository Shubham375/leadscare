const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.msg || "backend error";
    const details = err.details || "An error occure in server";

    return res.status(status).json({msg:msg,details:details});
};

module.exports = errorMiddleware;