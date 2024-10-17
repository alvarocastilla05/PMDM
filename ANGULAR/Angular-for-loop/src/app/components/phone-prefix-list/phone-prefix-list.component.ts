import { Component } from '@angular/core';

export interface CountryPhone{
  name: string;
  flag: string;
  prefix: number[];
}

const COUNTRY_PREFIXES: CountryPhone[] = [
  {name: 'Spain', flag: 'https://img.freeflagicons.com/thumb/round_icon/spain/spain_640.png' , prefix: [34]},
  {name: 'Dominican Republic', flag: 'https://img.freeflagicons.com/thumb/round_icon/dominican_republic/dominican_republic_640.png', prefix: [809, 829, 849]}
  
];

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {
  countryPhoneList = COUNTRY_PREFIXES;

  getFlagImage(flag: string): string {
    return `https://img.freeflagicons.com/thumb/round_icon/${flag}_640.png`;
  }
}
