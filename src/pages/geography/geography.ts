import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { HomePage } from '../home/home';

/**
 * Generated class for the GeographyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geography',
  templateUrl: 'geography.html',
})
export class GeographyPage {

  questionOne;
  questionTwo;
  questionThree;
  questionFour;
  questionFive;
  score=0;
 
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeographyPage');
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
            this.navCtrl.push(HistoryPage);
          }
        }
      ]
    });
    confirm.present();
  }
  btnSubmit() {

       if(this.questionOne=="B"){
          this.score=this.score+1;    
       }
       if(this.questionTwo=="C"){
         this.score=this.score+1;
       }
       if(this.questionThree=="C"){
         this.score=this.score+1;
       }
       if(this.questionFour=="B"){
         this.score=this.score+1;
       }
       if(this.questionFive=="B"){
         this.score=this.score+1;
       }
       if(this.score==5){
        this.showConfirm();
    }else{
          alert("Sorry! you Scored " +this.score+"/5"+" you need to get everything correct, Please check your answers and try again");
          this.navCtrl.push(GeographyPage);
          console.log(this.score);
    }
}
}