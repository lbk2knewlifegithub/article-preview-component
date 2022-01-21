import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-share-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-4">
      <h3 class="text-fill-700  tracking-[.2rem] ">SHARE</h3>

      <lbk-socials></lbk-socials>
    </div>

    <div
      class="arrow-down absolute bottom-0 translate-y-full -translate-x-1/2 left-1/2"
    ></div>
  `,
  styles: [
    `
      :host {
        @apply relative bg-fill-900 py-3 px-8  rounded-xl;
        @apply flex items-center justify-between;
      }
    `,
  ],
})
export class ShareDropdownComponent {}
