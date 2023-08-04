import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AddCategoryComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
