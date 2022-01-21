import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropDownModule } from '../shared';
import { ArticlePreviewRoutingModule } from './article-preview-routing.module';
import { COMPONENTS } from './components';
import { ArticlePreviewPageComponent } from './containers';

const CONTAINERS = [ArticlePreviewPageComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ArticlePreviewRoutingModule,
    DropDownModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ArticlePreviewModule {}
