import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uv-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent  {

    @Input() size: 'auto' | 'sm' | 'md' = 'auto';

}
