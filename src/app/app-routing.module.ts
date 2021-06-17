import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '', component: PropertyCardComponent },
  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'product', redirectTo: '/products/product', pathMatch: 'full' },
  { path: 'login', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user--pages/user-pages.module').then((m) => m.UserPagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
