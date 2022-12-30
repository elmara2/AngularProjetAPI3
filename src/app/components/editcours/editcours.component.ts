import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editcours',
  templateUrl: './editcours.component.html',
  styleUrls: ['./editcours.component.css']
})
export class EditcoursComponent implements OnInit{

  coursFormGroup!:FormGroup;
  submitted = false;
  idcours:number;
  deleted=false;

  constructor(private courservice:CoursService,private fb:FormBuilder,activeRoute:ActivatedRoute ) {
    this.idcours=activeRoute.snapshot.params.idcours;
  }
  ngOnInit() :void{
    this.courservice.getCours(this.idcours).subscribe(
      cours => {this.coursFormGroup = this.fb.group({
        idcours: [cours.idcours,Validators.required],
        code:[cours.code,Validators.required],
        intitule:[cours.intitule,Validators.required]
      })
      });
  }

  onUpdateCours() {
    this.submitted=true;
    if (this.coursFormGroup?.invalid){return;}
    this.courservice.updateCours(this.coursFormGroup.value).subscribe(
      data=>{alert("mise a jour ok")},
      error => {alert(error.headers.get("error"));}
    );
  }

}
