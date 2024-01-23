import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UpperCasePipe, NgIf} from "@angular/common";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    FormsModule,
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

}
