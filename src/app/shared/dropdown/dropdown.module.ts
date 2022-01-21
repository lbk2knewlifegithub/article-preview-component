import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropDownContentDirective } from './dropdown-content.directive';
import { DropDownToggleDirective } from './dropdown-toggle.directive';
import { DropDownComponent } from './dropdown.component';

const DIRECTIVES = [DropDownToggleDirective, DropDownContentDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [DropDownComponent, DIRECTIVES],
  exports: [DropDownComponent, DIRECTIVES],
})
export class DropDownModule {}
