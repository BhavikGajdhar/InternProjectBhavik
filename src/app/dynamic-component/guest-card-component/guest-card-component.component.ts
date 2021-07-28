import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-guest-card-component',
  templateUrl: './guest-card-component.component.html',
  styleUrls: ['./guest-card-component.component.css'],
})
export class GuestCardComponentComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {}

  public login() {
    this.profileService.login();
  }
}
