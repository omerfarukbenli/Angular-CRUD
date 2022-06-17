import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs'; //bunu yazdık
import { InspectionApiService } from 'src/app/inspection-api.service'; //bunu yazdık

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {


inspectionList$!:Observable<any[]>;              //bunu yazdık
inspectionTypesList$!:Observable<any[]>;         //bunu yazdık
inspectionTypesList:any=[];                      //bunu yazdık

///////map

inspectionTypesMap:Map<number, string> = new Map()    //bunu yazdık


  constructor(private service:InspectionApiService) { }      //bunu yazdık

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();            //bunu yazdık
    this.inspectionTypesList$ = this.service.getInspectionTypesList();  //bunu yazdık
    this.refreshInspectionTypesMap();                                   //bunu yazdık         
  }

  //variables (properties)
  modalTitle:string = '';                                //bunu yazdık
  activateaddEditInspectionComponent:boolean = false;   //bunu yazdık
  inspection:any;


  //bunu yazdık
  modalAdd(){
  this.inspection =  {
    id:0,
    status:null,
    comment:null,
    inspectionTypeId:null
  }
  this.modalTitle = "Add Inspection";
  this.activateaddEditInspectionComponent = true;
  }
  modalEdit(item:any){
this.inspection = item;
this.modalTitle = "Edit Inspection";
this.activateaddEditInspectionComponent = true;
  }

  delete(item:any){
      if(confirm('Are you sure ${item.id}')){
        this.service.deleteInspection(item.id).subscribe(res =>
          {
            var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "none"
        }
      },4000);
      this.inspectionList$ = this.service.getInspectionList();
          })
      }
  }


  modalClose(){
    this.activateaddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  refreshInspectionTypesMap(){
    this.service.getInspectionTypesList().subscribe(data =>
    {
this.inspectionTypesList = data;
for(let i = 0; i<data.length; i++)
{
  this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
}
    })
  

}}
