import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateService } from '../date.service';

@Component({
  selector: 'app-tinh-tuoi',
  templateUrl: './tinh-tuoi.component.html',
  styleUrls: ['./tinh-tuoi.component.scss']
})
export class TinhTuoiComponent implements OnInit {
  input = new FormControl('');
  output: string;
  constructor(private dateService: DateService) {}

  ngOnInit() {}

  onClick() {
    const value = this.input.value;
    const arr = value.split('-');
    const d = new Date(`${arr[1]}-${arr[0]}-${arr[2]}`);
    this.output = this.dateService.tinhTuoi(d);
  }
}
