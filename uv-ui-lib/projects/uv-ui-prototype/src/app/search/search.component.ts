import { Component,  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
    items = [
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'End Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
    ]

}
