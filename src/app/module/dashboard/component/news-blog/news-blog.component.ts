import { Component } from '@angular/core';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrl: './news-blog.component.scss'
})
export class NewsBlogComponent {
  public listItems= [
    "KiwiSaver HomeStart grant explained",
    "What is happening in the property market",
    "Trust law reform",
    "Tax update - Simplification of taxes, foreign ...",
    "What do the new lending rules mean",
    "How will the Reserve bank group respond to ..."
  ]
}
