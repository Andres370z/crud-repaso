import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartInfoComponent } from './pages/cart-info/cart-info.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'cartInfo', component: CartInfoComponent},

  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
