import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormComponent } from '../form/form.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [FormComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) { } // ✅ Injecting the service
  
  title:String='I love You Bua';

  updateTitle(newTitle:string):void{
    this.title=newTitle;
  }

  ngOnInit(): void {
    this.getData();
  }

  
  getData(){
    this.apiService.fetchTodo();
  }
}
