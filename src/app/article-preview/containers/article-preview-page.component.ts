import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tadaOnEnterAnimation } from 'angular-animations';
import { Article } from 'src/app/models';
import * as fromData from 'src/app/shared/data';

@Component({
  selector: 'lbk-article-preview-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container lg:h-screen lg:grid lg:place-content-center">
      <lbk-article-preview
        @tadaOnEnter
        [article]="article"
        class="block mt-20 max-w-xs mx-auto sm:mt-32 lg:max-w-[800px] lg:mt-0"
      ></lbk-article-preview>
    </main>
  `,
  animations: [tadaOnEnterAnimation()],
})
export class ArticlePreviewPageComponent implements OnInit {
  article!: Article;

  ngOnInit(): void {
    this.article = fromData.article;
  }
}
