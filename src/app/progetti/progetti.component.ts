import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdb-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css'],
})
export class ProgettiComponent implements OnInit {
  projectCards = [
    {
      img: '../../assets/progetti-cards/card1.png',
      title: 'ANTONI CASCINALE',
      subTitle: 'Ristrutturazione e cambio colore da noce a laccato ',
    },
    {
      img: '../../assets/progetti-cards/card2.png',
      title: 'INTERNI BIANCHI',
      subTitle: 'Ristrutturazione serramenti interni',
    },
    {
      img: '../../assets/progetti-cards/card3.png',
      title: 'VILLA GRASSENI',
      subTitle:
        'Per conto del comune di Flero con la supervisione del Ministero delle Belle Arti',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
