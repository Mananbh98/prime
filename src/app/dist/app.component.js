"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'prime';
        this.number = '';
        this.currentVal = 0;
        this.submitted = false;
        this.isCurrentValPrime = false;
        this.isCurrentPrime = '';
        this.N = 0;
        this.isNextPrime = false;
        this.nextPrimeVal = 0;
        this.submittedNextPrimeButton = false;
    }
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.currentVal = parseInt(this.number);
        this.isCurrentValPrime = this.isPrime(this.currentVal);
        if (this.isCurrentValPrime === true) {
            this.isCurrentPrime = 'prime';
        }
        else {
            this.isCurrentPrime = 'not prime';
        }
        console.log(this.currentVal + ' is  ' + this.isCurrentPrime);
    };
    AppComponent.prototype.onNextPrime = function () {
        this.submittedNextPrimeButton = true;
        if (this.isCurrentValPrime === true) {
            this.N = this.currentVal;
        }
        this.nextPrimeVal = this.nextPrime(this.N);
        console.log(this.nextPrimeVal + 'is the next prime');
    };
    AppComponent.prototype.isPrime = function (val) {
        var n, i, flag = true;
        n = val;
        for (i = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
        // Check and display alert message
        return flag;
    };
    AppComponent.prototype.nextPrime = function (val) {
        var N, found = false;
        N = val;
        while (!found) {
            N++;
            if (this.isPrime(N) === true) {
                found = true;
                console.log('The next prime is ' + N);
            }
        }
        return N;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
