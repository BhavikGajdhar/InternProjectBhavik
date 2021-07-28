import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-templating',
  templateUrl: './dynamic-templating.component.html',
  styleUrls: ['./dynamic-templating.component.css'],
})
export class DynamicTemplatingComponent implements OnInit {
  public contacts = {
    users: [
      {
        name: 'Joe Smith',
        //  avatar: 'https://avatars.dicebear.com/v2/male/joe-smith.svg',
        email: 'joesmith@test.com',
        phone: '800-123-4567',
      },
      {
        name: 'Ted Johnson',
        //  avatar: 'https://avatars.dicebear.com/v2/male/ted-johnson.svg',
        email: 'tedjohnson@test.com',
        phone: '800-123-4567',
      },
      {
        name: 'Amy Smithfield',
        //  avatar: 'https://avatars.dicebear.com/v2/female/amy-smithfield.svg',
        email: 'amysmithfield@test.com',
        phone: '800-123-4567',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  public log(myTemplateRef: any) {
    console.log(myTemplateRef);
  }
}
