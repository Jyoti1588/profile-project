import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  current = 0;
  img_list = [
    'https://picsum.photos/600/400/?image=0',
    'https://picsum.photos/600/400/?image=1',
    'https://picsum.photos/600/400/?image=2',
  ];
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  }

}
