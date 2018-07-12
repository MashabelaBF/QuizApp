import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeographyPage } from '../geography/geography';

/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {

  questionOne;
  questionTwo;
  questionThree;
  questionFour;
  questionFive;
  score;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SciencePage');
  }
  btnSubmit(event) {

    if (this.questionOne == "B" && this.questionTwo == "B" && 
        this.questionThree == "B" && this.questionFour == "A" && this.questionFive == "B") {
        this.score = 5;
        this.navCtrl.push(GeographyPage);
    }else{
        alert("Sorry! you need to get everything correct, Please check your answer and try again");
    }
}
}