import { isPromise } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prime';
  number = '';
  currentVal = 0;
  submitted = false;
  isCurrentValPrime = false;
  isCurrentPrime = '';
  N = 0;
  isNextPrime = false;
  nextPrimeVal = 0;
  submittedNextPrimeButton = false;

  onSubmit() {
    this.submitted = true;
    this.currentVal = parseInt(this.number);
    this.isCurrentValPrime = this.isPrime(this.currentVal);
    if (this.isCurrentValPrime === true) {
      this.isCurrentPrime = 'prime';
    } else {
      this.isCurrentPrime = 'not prime';
    }
    console.log(this.currentVal + ' is  ' + this.isCurrentPrime);
  }

  onNextPrime() {
    this.submittedNextPrimeButton = true;
    if (this.isCurrentValPrime === true) {
      this.N = this.currentVal;
    }
    this.nextPrimeVal = this.nextPrime(this.N);
    console.log(this.nextPrimeVal + 'is the next prime');
  }

  isPrime(val: number) {
    var n: number,
      i: number,
      flag: boolean = true;

    n = val;
    for (i = 2; i <= n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }

    // Check and display alert message

    return flag;
  }

  nextPrime(val: number) {
    var N: number,
      found: boolean = false;
    N = val;
    while (!found) {
      N++;
      if (this.isPrime(N) === true) {
        found = true;
        console.log('The next prime is ' + N);
      }
    }
    return N;
  }
}
