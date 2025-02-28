export class ApiResponse {
  message: string;
  success: boolean;
  statusCode: number;
  data: any;

  constructor( statusCode = 200,message: string, data: any) {
    this.message = message;
    this.success = true;
    this.statusCode = statusCode;
    this.data = data;
  }
}
