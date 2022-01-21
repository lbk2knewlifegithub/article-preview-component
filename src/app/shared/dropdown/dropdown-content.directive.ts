import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dropDownContent]',
})
export class DropDownContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
