import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prime';
  number="";
  str="";
  flag="";
  no=this.number;
   p() {

    var n, i, flag = true;

    // Getting the value form text
    // field using DOM
    n = this.number;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }

        // Check and display alert message
    if (flag == true)
        console.log(n + " is prime");


    else
         console.log(n + " is not prime");


    }


  isPromise(){
    var n, i, flag = true;
    n=this.no;
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }



  }
  nextprime(){

  }
}