import ErrorCodes from "../errorCodes.utils"

class ValidationException extends Error {

    code: number
    name: string
    error: string
    data: any
    status: number

    constructor(code: number, message: string, data: any) {
        super(message)
        this.message = message;
        this.code = code
        this.error = "Validation error"
        this.name = this.constructor.name
        this.data = data
        this.status = 400
    }

}

export class InvalidPropertiesException extends ValidationException {
    constructor(message:string,data:any) {
        super(ErrorCodes.InvalidPropertiesException,message,data)
    }
};