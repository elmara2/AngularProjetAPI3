import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-cours',
  templateUrl: './new-cours.component.html',
  styleUrls: ['./new-cours.component.css']
})
export class NewCoursComponent implements OnInit{

  coursFormGroup?:FormGroup;
  submitted = false;
  idcours:number|null=null;

  constructor(private fb:FormBuilder,private coursService:CoursService,private router:Router) {
  }

  ngOnInit() :void{
    this.coursFormGroup=this.fb.group({
      code:["",Validators.required],
      intitule:["",Validators.required]
    });
  }

  onSaveCours(){
    this.submitted=true;
    if (this.coursFormGroup?.invalid){return}

    this.coursService.save(this.coursFormGroup?.value).subscribe(
      data=>{alert('sauvegarde ok');this.idcours=data.idcours},
      error => {alert(error.headers.get("error"));}
    );
  }

}
