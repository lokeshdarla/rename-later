// src/errors/custom-error.ts
export class CustomError extends Error {
  statusCode: number;
  message: string;
  details: any;

  constructor(statusCode: number, message: string, details: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(404, message);
  }
}

export class ValidationError extends CustomError {
  constructor(message: string, details?: any) {
    super(400, message, details);
  }
}

export class DatabaseError extends CustomError {
  constructor(message: string, details?: any) {
    super(500, message, details);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}
