import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sharedPosts = [];

  onPostAdded (post){
    this.sharedPosts.push(post);
  }
}
