import { Component } from '@angular/core';

@Component({
    selector: 'uv-ui-shell',
    template: `
        <div class="uv-app-shell">
            <div class="header">
                <lib-uv-ui-header></lib-uv-ui-header>
            </div>
            <div class="navbar">
                <lib-uv-ui-navbar></lib-uv-ui-navbar>
            </div>
        </div>
    `,
//   styleUrls: ['./page.css'],
})
export default class UvUiShellComponent {

}
