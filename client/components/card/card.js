/**
* @desc card component 
* @example <card></card>
*/
angular
    .module('app.card', [])
    .directive('cardDirective', cardDirective);
   
function cardDirective() {
    var directive = {
        restrict: 'EA',
        templateUrl: '../../components/card/card.html',
        scope: {
            title: '<',
            summary: '<'
        },
        controller: CardController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

function CardController() {
    var vm = this;
}