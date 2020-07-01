import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this Tree today',
    },
    {
      title: 'Snowy mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: 'mountainLover',
      content: 'A Picture of a Snowy mountain',
    },
    {
      title: 'Mountain bike',
      imgUrl: 'assets/biking.jpeg',
      username: 'biker007',
      content: 'Did some mountain bike today',
    },
  ];
}
