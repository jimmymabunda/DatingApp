import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }
model: any = {};
  ngOnInit() {
  }


  register() {
    this.authService.regisetr(this.model).subscribe(()=>{
      console.log('registration successful');
    }, error => {
      console.log(error);
    });

  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');

  }
}
