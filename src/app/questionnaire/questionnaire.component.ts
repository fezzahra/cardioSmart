import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public sexe="1";
  public age:number;
  public cp="1";
  public trestbps:number;
  public chol:number;
  public fbs="1";
  public restecg="0";
  public thalach : number;
  public exang="1";
  public oldpeak:number;
  public slope="0";
  public ca="0";
  public thal="1";
 



  constructor() { }

  ngOnInit(): void {
  }
  onSave(questionnaire){
    questionnaire.sexe=this.sexe;
    questionnaire.age=this.age;
    questionnaire.cp=this.cp;
    questionnaire.chol=this.chol;
    questionnaire.fbs=this.fbs;
    questionnaire.restecg=this.restecg;
    questionnaire.thalach=this.thalach;
    questionnaire.exang=this.exang;
    questionnaire.oldpeak=this.oldpeak;
    questionnaire.slope=this.slope;
    questionnaire.ca=this.ca;
    questionnaire.thal=this.thal;


  }

  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;

  }

}
