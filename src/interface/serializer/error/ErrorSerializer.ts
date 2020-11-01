import { BaseError } from "../../../util/HttpException";
import { ErrorRO } from "./ErrorRO";

export class ErrorSerializer {
  serialize(error: Error | BaseError): ErrorRO {
    let status = 500;

    if (error instanceof BaseError) status = error.status;

    return {
      error: {
        status,
        name: error.name,
        message: error.message,
      },
    };
  }
}
