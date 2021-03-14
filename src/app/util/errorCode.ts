/**
 * Custom error codes to be send to UI to display proper a response
 */
export const ErrorCodes: { [key: string]: CustomError } = {
    SERVICE_ERROR: {
        CODE: "SERVICE_ERROR",
        MESSAGE: "Obtained error from external service. Please check the logs."
    }
};

/**
 * Interface to describe custom errors
 */
export interface CustomError {
    CODE: string;
    MESSAGE: string;
}
