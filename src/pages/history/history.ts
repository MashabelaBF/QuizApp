import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  questionOne;
  questionTwo;
  questionThree;
  questionFour;
  questionFive;
  score;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  btnSubmit(event) {

    if (this.questionOne == "D" && this.questionTwo == "A" && 
        this.questionThree == "A" && this.questionFour == "B" && this.questionFive == "B") {
        this.score = 5;
        this.navCtrl.push(ResultsPage);
    }else{
        alert("Sorry! you need to get everything correct, Please check your answer and try again");
    }
}
}