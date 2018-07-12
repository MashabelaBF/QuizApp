import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, RadioButton, HideWhen } from 'ionic-angular';
import { RadioControlValueAccessor } from '@angular/forms';
import { MathsPage } from '../maths/maths';
import { isEmbeddedView } from '@angular/core/src/view/util';
import { AlertController } from 'ionic-angular';


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
  score;
  list;
  listN;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Congradulations!',
      message: 'You got 100% click next to proceed to Stage 2',
      buttons: [
        {
          text: 'Quit',
          handler: () => {
            this.navCtrl.pop();
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
  btnSubmit(event) {

    if (this.questionOne == "A" && this.questionTwo == "D" && 
        this.questionThree == "A" && this.questionFour == "B" && this.questionFive == "D") {
        this.score = 5;
        this.showConfirm();
        
    }else{
        alert("Sorry! you need to get everything correct, Please check your answers and try again");
        this.navCtrl.push(EducationPage);
    }
   

  }
  
 
}



