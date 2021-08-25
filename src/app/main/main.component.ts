import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Content } from '../content/content.enum';
import { Benefits } from '../content/benefits.enum';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public content: typeof Content = Content;
  public benefits: typeof Benefits = Benefits;
  public oldPrice: number = 234;
  public newPrice: number = 144;
  public benefitsList: string[] = [
    'Висока якість',
    'Низька ціна',
    'Довговічність матеріалу',
    'Велика кількість відсіків',
  ];

  public howToBuyList: string[] = [
    'Залиште заявку на сайті',
    'Наш менеджер уточнить деталі замовлення',
    'Служба доставки доставляє ваш товар',
    'Оплачуйте при отриманні товару',
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  public reviews = [
    {
      src: '../../assets/img/benefit1.png',
      alt: 'review1',
      text: '“Гаманець дружина подарувала мені на мої Іменини, дуже стильний і крутий подарунок, рекомендую!”',
      author: 'Сергій',
      region: 'Тернопільська обл.',
    },
    {
      src: '../../assets/img/benefit2.png',
      alt: 'review2',
      text: '“дружина подарувала мені на мо дуже стильний і крутий подарунок, рекомендую!”',
      author: 'Сергій Притула',
      region: 'Тернопільська обл.',
    },
    {
      src: '../../assets/img/big.png',
      alt: 'review3',
      text: '“подарувала мені на мої Іменини, дуже стильний і крутий подарунок, рекомендую!”',
      author: 'Притула',
      region: 'Тернопільська обл.',
    },
  ];

  constructor(public http: HttpService) {}

  register() {
    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      phone: this.phoneFormControl.value,
    };
    console.log(user);

    this.http.sendEmail('http://localhost:3000/send', user).subscribe();
  }

  reviewOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="arrow left"></i>', '<i class="arrow right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
