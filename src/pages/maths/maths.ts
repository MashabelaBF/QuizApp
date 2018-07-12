import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SciencePage } from '../science/science';

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
  score;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathsPage');
  }
  btnSubmit(event) {

    if (this.questionOne == "C" && this.questionTwo == "D" && 
        this.questionThree == "A" && this.questionFour == "B" && this.questionFive == "B") {
        this.score = 5;
        this.navCtrl.push(SciencePage);
    }else{
        alert("Sorry! you need to get everything correct, Please check your answer and try again");
    }
   

  }
}
