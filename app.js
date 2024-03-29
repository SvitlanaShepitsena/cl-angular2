if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// Annotation section
var SvPromoterAdvantagesComponent = (function () {
    function SvPromoterAdvantagesComponent() {
        this.advantages = [
            'managing all social networks posts in one place',
            'save time for your business activity',
            'save time for your business activity 2',
            'have your services announced regularly'
        ];
    }
    SvPromoterAdvantagesComponent = __decorate([
        angular2_1.Component({
            selector: 'sv-promoter-advantages'
        }),
        angular2_1.View({
            templateUrl: 'views/sv-promoter-advantages.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], SvPromoterAdvantagesComponent);
    return SvPromoterAdvantagesComponent;
})();
angular2_1.bootstrap(SvPromoterAdvantagesComponent);
