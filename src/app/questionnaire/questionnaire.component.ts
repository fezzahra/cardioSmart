import { Component, OnInit, ɵConsole } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public sexe;
  public age:number;
  public cp;
  public trestbps:number;
  public chol:number;
  public fbs;
  public restecg;
  public thalach : number;
  public exang;
  public oldpeak:number;
  public slope;
  public ca;
  public thal;
  public model:tf.LayersModel;
  public prediction:any;
  public prediction_fl:any;
  public array:Array<Number>;

  constructor() { }

  ngOnInit(): void {
    this.loadModel();
  }

  onSave(){

    this.array=[Number(this.age),Number(this.sexe),Number(this.cp),Number(this.trestbps),Number(this.chol),Number(this.fbs),Number(this.restecg),Number(this.thalach),Number(this.exang),Number(this.oldpeak),Number(this.slope),Number(this.ca),Number(this.thal)];
    console.log(this.array);
    this.predict(this.array);

  }

  

  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;

  }

   
  async loadModel() {
  console.log('hey');
  this.model = await tf.loadLayersModel('../../assets/model.json');
  console.log('Model loaded');
  console.log(this.model);
  
  //console.log(this.http.get('../assets/model.json'));
  //return this.http.get('../assets/model.json');

}



predict(data) {

  

    // Make and format the predications
   // this.prediction = this.model.predict([this.sexe,this.age,this.cp,this.chol,this.fbs,this.restecg,this.thalach,this.exang,this.oldpeak,this.slope,this.ca,this.thalach]).reshape([1,13]));
    this.prediction = this.model.predict(tf.tensor(data).reshape([1,13]));
    this.prediction_fl=Math.round(this.prediction.dataSync()[0])
    console.log(this.prediction);
    console.log(this.prediction_fl);
    this.affiche(this.prediction_fl);

 
  

}

affiche(val){

  let res:String;

  if(val==1){
    res="Sur la base de vos réponses, il apparait qu'une insuffisance cardiaque  est possible,Vous devriez consulter votre médecin rapidement.";
    
  }
  if(val==0){
    res="Sur la base de vos réponses, il apparait que votre coeur est en bonne condition.";

  }

  Swal.fire({
    title: 'Résultat du test ',
    width: 600,
    text: res.toString(),
    padding: '3em',
    background: '#fff',
    backdrop: `rgba(51,51,51,0.4)`,
    confirmButtonColor: '#FF8080',
    confirmButtonText : 'Quitter'
    
  }).then(function() {
    window.location.href = "/accueil";
  });

 




}


 
  


}

