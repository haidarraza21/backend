class ApiResponse {
  constructor(statusCose, data, massege = "Seccess") {
    this.statusCose = statusCose;
    this.massege = massege;
    this.data = data;
    this.succese = statusCose < 400;
  }
}
