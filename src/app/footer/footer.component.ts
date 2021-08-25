import { Component, OnInit } from '@angular/core';
import { Content } from '../content/content.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public content: typeof Content = Content;

  constructor() { }

  ngOnInit(): void {
  }

}
