import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GithubSearchService } from './github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  repos: any[];
  constructor(private githubSearchService: GithubSearchService) {}
  ngOnInit() {
    // this.githubSearchService
    //   .searchRepos('angular')
    //   .pipe(map(res => res.items))
    //   .subscribe(
    //     next => (this.repos = next),
    //     error => {
    //       console.log('ahihi loi roi');
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('done');
    //     }
    //   );
  }
}
