import { ValidationError } from "class-validator";
import APP_CONSTANTS from "../constants/index";

/**
 * Base http exception class.
 */
class HttpException extends Error {
  public status: number;
  public message: string;
  public errorCode: string;
  public service: string;

  constructor(status: number, message: string, errorCode: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.errorCode = errorCode;
    this.service = APP_CONSTANTS.service;
  }
}

export default HttpException;
