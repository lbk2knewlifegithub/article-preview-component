import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-share-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-4">
      <h3 class="text-fill-700  tracking-[.2rem] ">SHARE</h3>

      <lbk-socials></lbk-socials>
    </div>

    <lbk-share-button (click)="closed.emit()" [white]="true"></lbk-share-button>
  `,
  styles: [
    `
      :host {
        @apply bg-fill-900 py-5 px-8 flex items-center justify-between;
      }
    `,
  ],
})
export class SharePanelComponent {
  @Output() closed = new EventEmitter<void>();
}
