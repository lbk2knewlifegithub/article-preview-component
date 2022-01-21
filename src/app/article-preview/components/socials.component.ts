import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-socials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex gap-3 items-center text-2xl text-white">
      <li>
        <a routerLink="/">
          <span class="fab fa-facebook-square"></span>
        </a>
      </li>
      <li>
        <a routerLink="/">
          <span class="fab fa-twitter"></span>
        </a>
      </li>
      <li>
        <a routerLink="/">
          <span class="fab fa-pinterest"></span>
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      a {
        @apply duration-500;
        @apply hover:text-fill-800;
      }
    `,
  ],
})
export class SocialsComponent {}
