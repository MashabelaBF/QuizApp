import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from '../history/history';

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
  score;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeographyPage');
  }

  btnSubmit(event) {

    if (this.questionOne == "B" && this.questionTwo == "C" && 
        this.questionThree == "C" && this.questionFour == "B" && this.questionFive == "B") {
        this.score = 5;
        this.navCtrl.push(HistoryPage);
    }else{
        alert("Sorry! you need to get everything correct, Please check your answer and try again");
    }
}
}