import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  fadeInUpOnEnterAnimation,
  fadeOutDownOnLeaveAnimation
} from 'angular-animations';
import { Article } from 'src/app/models';

@Component({
  selector: 'lbk-article-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-preview.component.html',
  animations: [fadeInUpOnEnterAnimation(), fadeOutDownOnLeaveAnimation()],
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  openShareDesktop = false;
  openShareMobile = false;

  closeShareMobile() {
    this.openShareMobile = false;
  }

  expandedChange(expanded: boolean) {
    this.openShareDesktop = expanded;
  }
}
