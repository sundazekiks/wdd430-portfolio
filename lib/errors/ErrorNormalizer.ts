import { AppError } from "./AppError";

export function ErrorNormalizer(error: Error) {
    // Check if the error is an instance of AppError
    if (error instanceof AppError) {
        return {
            ...error.toJSON()
        };
    }

    // For other types of errors, return a generic message and code
    return {
        message: "An unexpected error occurred.",
        code: 500
    };
}