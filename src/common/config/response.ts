export class Response {
    constructor(public status: number) {}
  }
  
  export class SuccessResponse<T> extends Response {
    constructor(public response: T) {
      super(200);
    }
  }
  
  export class FailResponse extends Response {
    constructor(public message: string) {
      super(500);
    }
  }
  
  export class ValidationErrorResponse extends Response {
    constructor(public errors: object) {
      super(400);
    }
  }