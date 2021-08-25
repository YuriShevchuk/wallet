import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Content } from '../content/content.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public content: typeof Content = Content;

  public slides = [
    {
      src: "../../assets/img/benefit1.png",
      alt: "photo"
    },
    {
      src: "../../assets/img/benefit2.png",
      alt: "photo"
    },
    {
      src: "../../assets/img/big.png",
      alt: "photo"
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
