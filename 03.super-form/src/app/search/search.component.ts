import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  constructor() {}

  ngOnInit() {
    this.searchInput.valueChanges.subscribe(term =>
      console.log('search with: ' + term)
    );
  }
}
