import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productComponent } from './shared/component/product.component';
import { productsComponent } from './shared/component/products.component';
import { aproductsComp } from './shared/component/All Products/aproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    productsComponent,
    aproductsComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
