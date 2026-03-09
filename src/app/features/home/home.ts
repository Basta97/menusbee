import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { WhyUs } from './components/why-us/why-us';
import { Pricing } from './components/pricing/pricing';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Features, WhyUs, Pricing, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
