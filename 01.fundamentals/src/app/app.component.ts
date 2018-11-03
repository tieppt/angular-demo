import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'day1';
  show = true;
  me = {
    name: 'Tiep Phan',
    title: 'Software Engineer',
    tel: '0123456789',
    email: 'phan.t.tiep@gmail.com',
    address: '201 - Ha Noi'
  };

  bob = {
    name: 'Bob',
    title: 'Software Engineer',
    tel: '01232352345',
    email: 'phan.t.tiep@gmail.com',
    address: '201 - Ha Noi'
  };

  tree = [
    {
      name: 'level 1.1',
      children: [
        {
          name: 'level 2.1'
        },
        {
          name: 'level 2.2',
          children: [
            {
              name: 'level 3'
            }
          ]
        }
      ]
    },
    {
      name: 'level 1.2'
    }
  ];

  users = [this.me, this.bob];
  time = 5;

  arr = new Array(10).fill(0).map((x, i) => ({ id: i + 1 }));

  showArr = JSON.parse(JSON.stringify(this.arr));

  ngOnInit() {
    setTimeout(() => {
      this.showArr = JSON.parse(JSON.stringify(this.arr));
    }, 3000);
    setTimeout(() => {
      this.showArr.splice(7, 0, { id: 15 });
    }, 4000);
  }

  arrTrackBy(item, index) {
    return item.id;
  }

  onTimerEnded() {
    this.time++;
  }

  onDelete(user) {
    this.me = null;
  }

  onListDelete(index) {
    this.users.splice(index, 1);
  }

  toggle() {
    this.show = !this.show;
  }
}
