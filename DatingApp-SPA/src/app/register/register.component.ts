import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }
model: any = {};
  ngOnInit() {
  }


  register() {
    this.authService.regisetr(this.model).subscribe(()=>{
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });

  }
  cancel() {
    this.cancelRegister.emit(false);
    

  }
}
