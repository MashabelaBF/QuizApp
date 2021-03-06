import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SciencePage } from '../science/science';
import { HomePage } from '../home/home';

/**
 * Generated class for the MathsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maths',
  templateUrl: 'maths.html',
})
export class MathsPage {

  questionOne;
  questionTwo;
  questionThree;
  questionFour;
  questionFive;
  score=0;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathsPage');
  }
  
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Congradulations!',
      message: 'You got ' +this.score+ '/5 click next to proceed to the next level',
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
            this.navCtrl.push(SciencePage);
          }
        }
      ]
    });
    confirm.present();
  }
  btnSubmit() {
  
       if(this.questionOne=="C"){
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
       if(this.questionFive=="B"){
         this.score=this.score+1;
       }
       if(this.score==5){
        this.showConfirm();
    }else{
          alert("Sorry! you Scored " +this.score+"/5"+" you need to get everything correct, Please check your answers and try again");
          this.navCtrl.push(MathsPage);
          console.log(this.score);
    }
  }
  gotoHome(){
    this.navCtrl.push(HomePage);
  }
}
