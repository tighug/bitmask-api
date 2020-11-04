export class BaseError extends Error {
  constructor(public status: number, message?: string) {
    super(message);
    this.name = new.target.name;
  }
}

export class BadRequestError extends BaseError {
  constructor(message?: string) {
    super(400, message);
  }
}

export class ConflictError extends BaseError {
  constructor(message?: string) {
    super(409, message);
  }
}

export class InternalServerError extends BaseError {
  constructor(message?: string) {
    super(500, message);
  }
}

export class NotFoundError extends BaseError {
  constructor(message?: string) {
    super(404, message);
  }
}
