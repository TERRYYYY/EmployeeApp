import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees (): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/v1/employees/`);
  }

  public addEmployees (employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiServerUrl}/api/v1/employees/`, employee);
  }

  public updateEmployees (employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiServerUrl}/api/v1/employees/${employee.id}`, employee);
  }

  public deleteEmployees (employeeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/employees/${employeeId}`);
  }
  
}
