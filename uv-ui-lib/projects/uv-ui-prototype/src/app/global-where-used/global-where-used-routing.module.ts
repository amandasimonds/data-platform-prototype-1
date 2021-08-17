import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { GlobalWhereUsedComponent } from './global-where-used.component';

const routes: Routes = [
    { path: '', component: GlobalWhereUsedComponent, children: [
        {
            path: 'form',
            component: FormPageComponent
          },
          {
            path: 'complete',
            component: CompletePageComponent
          },
          {
            path: '',
            component: FormPageComponent
          }
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class GwuRoutingModule { }
