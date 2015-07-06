/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1><div>I\'m {{age}} years old.</div>'
})
// Component controller
class MyAppComponent {
    name:string;
    age:number;

    constructor() {
        this.name = 'Alice';
        this.age = 18;
    }
}

bootstrap(MyAppComponent);