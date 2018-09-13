import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-IMChallenge',
  templateUrl: 'IMChallenge.html'
})
export class IMChallenge {
  constructor(public navCtrl: NavController) {
    var name = document.getElementById("name") as HTMLInputElement      
    var min = document.getElementById("minutes") as HTMLInputElement
    var sec = document.getElementById("seconds") as HTMLInputElement
    var hund = document.getElementById("hundredths") as HTMLInputElement
    let event = document.getElementById("race") as HTMLInputElement
    console.log(name, min.value, sec.value, hund.value)
    var total = min.value.concat(":", sec.value, ".", hund.value );
    console.log(total);
}

}