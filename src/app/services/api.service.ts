import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchTodo() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (result:any) => console.log(result, 'result'), // ✅ Subscribe to handle observable data
      (error:any) => console.error('Error fetching data', error) // ✅ Handle error
    );
  }
}
