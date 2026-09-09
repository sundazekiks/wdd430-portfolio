export class AppError extends Error {
    message: string;
    code: number;

    constructor(message: string, public statusCode: number) {
        super(message);
        this.message = message;
        this.code = statusCode
    }

    // return an object for the error with the message and code
    toJSON() {
        return {
            message: this.message,
            code: this.code
        }
    }
}