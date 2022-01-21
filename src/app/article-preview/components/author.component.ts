import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Author } from 'src/app/models';

@Component({
  selector: 'lbk-author',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center gap-4">
      <img
        class="w-10 h-10 rounded-full "
        [src]="author.image"
        [alt]="author.name"
      />

      <div>
        <h4>{{ author.name }}</h4>
        <p class="text-fill-800 text-sm">{{ author.createdAt }}</p>
      </div>
    </div>
  `,
})
export class ProfileComponent {
  @Input() author!: Author;
}
