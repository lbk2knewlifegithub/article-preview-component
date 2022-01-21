import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePreviewPageComponent } from './containers';

const routes: Routes = [{ path: '', component: ArticlePreviewPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlePreviewRoutingModule {}
