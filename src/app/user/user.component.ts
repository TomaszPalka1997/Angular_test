import { Component, Input, input } from '@angular/core';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  avatar = input();


get imagePath(){
  return 'assets/users/' + this.avatar
}

  selectingUser() {}


}
