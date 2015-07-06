/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor,NgIf} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'sv-promoter-advantages'
})
@View({
    templateUrl: 'views/sv-promoter-advantages.html',
    directives:[NgFor,NgIf]
})
// Component controller
class SvPromoterAdvantagesComponent {
    advantages:Array<string>;

    constructor() {
        this.advantages = [
            'managing all social networks posts in one place',
            'save time for your business activity',
            'save time for your business activity 2',
            'have your services announced regularly'
        ]
    }
}

bootstrap(SvPromoterAdvantagesComponent);