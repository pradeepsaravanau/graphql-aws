import ErrorCodes from "../errorCodes.utils"

class AuthException extends Error {
    code: number
    name: string
    error: string
    data: any
    status: number

    constructor(code: number, message: string, data: any) {
        super(message)
        this.message = message;
        this.code = code
        this.error = "Auth error"
        this.name = this.constructor.name
        this.data = data
        this.status = 400
    }
};

export class InvalidCredentialsException extends AuthException {
    constructor(message: string, data?: any) {
        super(ErrorCodes.InvalidCredentialsException, message, data);
    }
}

export class UnauthorizedException extends AuthException {
    constructor(message = 'User unauthorized for action', data?: any) {
        super(ErrorCodes.UnauthorizedException, message, data);
    }
}

export class TokenMissingException extends AuthException {
    constructor(message = "Access denied. No token credentials sent", data?: any) {
        super(ErrorCodes.TokenMissingException, message, data);
    }
}

export class TokenVerificationException extends AuthException {
    constructor(message = "Authentication failed", data?: any) {
        super(ErrorCodes.TokenVerificationException, message, data);
    }
}

export class TokenExpiredException extends AuthException {
    constructor(message = "JWT expired", data?: any) {
        super(ErrorCodes.TokenExpiredException, message, data);
    }
}