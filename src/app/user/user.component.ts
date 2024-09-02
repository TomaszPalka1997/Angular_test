import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import {type User} from './user.model'



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: User;
@Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


get imagePath(){
  return 'assets/users/' + this.user.avatar
}

  onSelectedUser() {
     this.select.emit(this.user.id);
  }
}
