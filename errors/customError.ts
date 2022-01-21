
class CustomApiError extends Error {

    statusCode: number;

    constructor(message: string, statusCode: number){
        super(message)
        this.statusCode = statusCode;
    }

}


 export const createCustomError = (message: string, statusCode: number) => {
    return new CustomApiError(message, statusCode);
}

export default CustomApiError;




