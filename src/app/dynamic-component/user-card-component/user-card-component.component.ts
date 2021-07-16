import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-card-component',
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.css'],
})
export class UserCardComponentComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  public logout() {
    this.profileService.logout();
  }
}
