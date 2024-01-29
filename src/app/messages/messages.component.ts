import {Component, Input} from '@angular/core';
import { MessageService} from "../message.service";
import {NgForOf, NgIf} from "@angular/common";
import {Hero} from "../hero";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
    constructor(public messageService: MessageService){
    }

}
