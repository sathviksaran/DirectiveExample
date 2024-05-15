import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirectiveExample';

  videos = [
    {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpeg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpeg'},
    {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpeg'}
  ]

  mostLikedVideo = this.getmostLikedVideo();

  getmostLikedVideo(){
    let videoCopy = [...this.videos];
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
