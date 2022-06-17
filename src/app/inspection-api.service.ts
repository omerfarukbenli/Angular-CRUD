import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7038/api";            //bunu yazdık
  constructor(private http:HttpClient) { }                             //bunu yazdık
  //https://localhost:7038/swagger/index.html



//Inspections///////////////////////////////////////////////////////////////////////////

  //get methodu
  getInspectionList():Observable<any[]> {                              //bunu yazdık
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections'); //bunu yazdık
  }

 //post methodu
 addInspection(data:any) {
  return this.http.post(this.inspectionAPIUrl + '/inspections', data);
 }

 //updata methodu
 updateInspection(id:number|string, data:any){
  return this.http.put(this.inspectionAPIUrl + '/inspections/${id}', data);
 }

 //delete methodu
 deleteInspection(id:number|string)
 {
  return this.http.delete(this.inspectionAPIUrl + '/inspections/${id}');
 }


//Inspections/Types///////////////////////////////////////////////////////////////////

 //get methodu
 getInspectionTypesList():Observable<any[]> {                              
  return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes'); 
}

//post methodu
addInspectionTypes(data:any) {
return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', data);
}

//updata methodu
updateInspectionTypes(id:number|string, data:any){
return this.http.put(this.inspectionAPIUrl + '/inspectionTypes/${id}', data);
}

//delete methodu
deleteInspectionTypes(id:number|string)
{
return this.http.delete(this.inspectionAPIUrl + '/inspectionTypes/${id}');
}

//Status///////////////////////////////////////////////////////////////////

 //get methodu
 getStatusList():Observable<any[]> {                              
  return this.http.get<any>(this.inspectionAPIUrl + '/status'); 
}

//post methodu
addStatus(data:any) {
return this.http.post(this.inspectionAPIUrl + '/status', data);
}

//updata methodu
updateStatus(id:number|string, data:any){
return this.http.put(this.inspectionAPIUrl + '/status/${id}', data);
}

//delete methodu
deleteStatus(id:number|string)
{
return this.http.delete(this.inspectionAPIUrl + '/status/${id}');
}


}
