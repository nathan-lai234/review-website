import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() score: number = 0;
  @Input() name: String = '';

  constructor() {}

  ngOnInit(): void {}
}
