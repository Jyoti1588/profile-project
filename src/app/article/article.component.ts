import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from "../data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(

    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getArticle().subscribe(data => this.mArticles = data['articles']);
  }

}
