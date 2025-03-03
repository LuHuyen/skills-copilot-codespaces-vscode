function skillMember(){
    return {
        restrict: 'E',
        templateUrl: 'app/skill/member.html',
        controller: 'MemberController',
        controllerAs: 'memberCtrl'
        bindToController: true
        scope/ {
            member: '='
        }        

    }};
}