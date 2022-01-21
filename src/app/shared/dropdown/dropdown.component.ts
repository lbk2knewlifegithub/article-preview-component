import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild
} from '@angular/core';
import {
  fadeInDownOnEnterAnimation,
  fadeOutUpOnLeaveAnimation
} from 'angular-animations';
import { DropDownContentDirective } from './dropdown-content.directive';

@Component({
  selector: 'lbk-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>

    <div
      *ngIf="expanded"
      @fadeInDownOnEnter
      @fadeOutUpOnLeave
      (mouseover)="mouseOverContent()"
      (mouseleave)="mouseLeaveContent()"
      class="absolute -top-24"
      [id]="contentId"
    >
      <ng-template [ngTemplateOutlet]="content.templateRef"></ng-template>
    </div>
  `,
  styles: [
    `
      :host {
        position: relative;
      }
    `,
  ],
  animations: [fadeInDownOnEnterAnimation(), fadeOutUpOnLeaveAnimation()],
})
export class DropDownComponent {
  static nextId = 0;

  contentId = `dropdown-${++DropDownComponent.nextId}`;

  hoverToggle = false;
  hoverContent = false;

  @ContentChild(DropDownContentDirective) content!: DropDownContentDirective;

  constructor(private readonly _cd: ChangeDetectorRef) {}

  maskForCheck() {
    this._cd.markForCheck();
  }

  get expanded(): boolean {
    return this.hoverContent || this.hoverToggle;
  }

  mouseOverContent() {
    if (this.hoverContent) return;

    this.hoverContent = true;
  }

  mouseLeaveContent() {
    if (!this.hoverContent) return;

    setTimeout(() => {
      this.hoverContent = false;
      if (this.hoverToggle) return;
      this.maskForCheck();
    }, 1_000);
  }
}
