import { Component, OnInit, Input } from '@angular/core';

interface ITree {
  name: string;
  children: ITree[] | null;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input()
  node: ITree;
  constructor() {}

  ngOnInit() {}
}
