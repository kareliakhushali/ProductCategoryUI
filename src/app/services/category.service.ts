import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/product';
import { Category } from '../shared/category';
import { Status } from '../shared/status';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseApiUrl :string='https://localhost:44327/api/Category/';

constructor(private http: HttpClient) { }

addCategory(category:Category)
{
return this.http.post<Status>(this.baseApiUrl ,category);
}
getAll()
{
  return this.http.get<Category[]>(this.baseApiUrl );
}
// getById(id:number)
// {
//   return this.http.get<Category>(`${this.baseApiUrl}${id}`);
// }
getById(id:number)
{
  return this.http.get<Category>(this.baseApiUrl + id);
}
// delete(id:number)
// {
//   return this.http.delete<Status>(`${this.baseApiUrl}${id}`)
// }
delete(id:number)
{
     return this.http.delete<Status>(this.baseApiUrl + id )
}
}
