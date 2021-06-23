interface AppErrorData  {
  status: number;
  message: string;
}

class AppError {
  public readonly status: number;
  public readonly message: string;

  constructor({ status, message }: AppErrorData) {
    this.status = status;
    this.message = message;
  }
}

export { AppError };