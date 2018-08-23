import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EducationPage } from '../education/education';
import { ResultsPage } from '../results/results';
import { CategoryPage } from '../category/category';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
gotoEdu(){
  this.navCtrl.push(EducationPage);
  
}
gotoEd(){
  this.navCtrl.push(ResultsPage);
}
gotoCategory(){
  this.navCtrl.push(CategoryPage);
}
gotoHome(){
  this.navCtrl.push(HomePage);
}
}
