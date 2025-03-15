import { Component } from '@angular/core';
import { User } from '../../model/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  user: User = { name: '', email: '', age: null }; // ✅ Use interface

  submitForm() {
    console.log('Form Data:', this.user); // ✅ Log form data
  }

}
