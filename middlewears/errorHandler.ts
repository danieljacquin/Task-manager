import CustomApiError from "../errors/customError"

const errorHandlerMiddleware = (err: any, req: any, res: any, next: any) => {

    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg: err.message})
    }

    res.status(500).json({msg: err.message});
}

export default errorHandlerMiddleware;