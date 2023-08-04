import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { Status } from '../shared/status';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseApiUrl:string='https://localhost:44327/api/Product/';
constructor(private http:HttpClient) { }

addUpdate(product:Product)
{
return this.http.post<Status>(this.baseApiUrl ,product);
}
getAll(term:string = "")
{
  return this.http.get<Product[]>(this.baseApiUrl);
}
// getById(id:number)
// {
//   return this.http.get<Product>(this.baseApiUrl + id);
// }
getById(id:number)
{
  return this.http.get<Product>(this.baseApiUrl + id);
}
delete(id:number)
{
  return this.http.delete<Status>(this.baseApiUrl + id)
}
}
