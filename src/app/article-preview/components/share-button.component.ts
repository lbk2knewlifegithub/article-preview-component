import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-share-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="w-9 h-9 bg-fill-700/50 rounded-full grid place-content-center"
    >
      <span [class.text-white]="white" class="fas fa-share text-sm duration-500"></span>
    </button>
  `,
})
export class ShareButtonComponent {
  @Input() white = false;
}
