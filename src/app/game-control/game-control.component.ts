import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval: any;
  isDisabled: boolean = false;
  lastNumber: number = 0;
  @Output() lastEmittedNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(): void {
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.lastEmittedNumber.emit(this.lastNumber);
    }, 1000);
    this.isDisabled = true;
  }

  onGamePause():void {
    clearInterval(this.interval);
    this.isDisabled = false;
  }
}
