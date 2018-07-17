import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, RadioButton, HideWhen, Slides } from 'ionic-angular';
import { RadioControlValueAccessor } from '@angular/forms';
import { MathsPage } from '../maths/maths';
import { isEmbeddedView } from '@angular/core/src/view/util';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
  questionOne;
  questionTwo;
  questionThree;
  questionFour;
  questionFive;
  score=0;

  
  ttl;
  slides
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Congradulations!',
      message: 'You got ' +this.score+ ' click next to proceed to Stage 2',
      buttons: [
        {
          text: 'Quit',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Next',
          handler: () => {
            this.navCtrl.push(MathsPage);
          }
        }
      ]
    });
    confirm.present();
  }
  btnSubmit() {

       if(this.questionOne=="A"){
          this.score=this.score+1;    
       }
       if(this.questionTwo=="D"){
         this.score=this.score+1;
       }
       if(this.questionThree=="A"){
         this.score=this.score+1;
       }
       if(this.questionFour=="B"){
         this.score=this.score+1;
       }
       if(this.questionFive=="D"){
         this.score=this.score+1;
       }
       if(this.score==5){
        this.showConfirm();
    }else{
          alert("Sorry! you Scored " +this.score+"/5"+" you need to get everything correct, Please check your answers and try again");
          this.navCtrl.push(EducationPage);
          
    }
}
 
 }
 



