import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation } from 'angular-animations';
import { Article } from 'src/app/models';

@Component({
  selector: 'lbk-article-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-preview.component.html',
  animations: [
    fadeInUpOnEnterAnimation(),
    fadeOutDownOnLeaveAnimation()
  ]
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  openShare = false;

  open(){
    this.openShare = true;
  }

  closed() {
    this.openShare = false;
  }

}
