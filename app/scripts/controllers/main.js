'use strict';

/**
 * @ngdoc function
 * @name byteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the byteApp
 */
angular.module('byteApp')
  .directive('speakerCard', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/speakercard.html',
      controller: 'MainCtrl'
    };
  })
  .service('dataFactory', function(){
    this.speakers = [{
      speakerName: 'Arjun Maheshwari',
      img:"../images/49c58a50-12fe-429f-9420-d8558e861ebf_medium.jpg",
      responsibility: 'Marketing Automation for Startups',
      position: 'Co-Founder at Betaout.com, An Omni-Channel Marketing Automation Tool',
      fromTime: 'Mar 8, 2018 11:00 AM',
      toTime: 'Mar 8, 2018 1:00 PM',
      skillTag: 'Marketing Automation',
      socMedia: {
        facebook: '#',
        twitter:'#',
        linkedin: '#'
      },
      about: "I'm Arjun, Co-founder and COO at Betaout.com , an Omni-Channel Marketing Automation Tool. Our powerful machine learning algorithms help digital marketers do meaningful marketing across channels.",
      resources: ['https://economictimes.indiatimes.com/small-biz/startups/betaout-the-marketing-platform-that-has-tinders-sam-yagan-excited/articleshow/56231885.cms','https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
     }, {
      speakerName: 'Bala Reddy',
      img:"../images/ad77f88e-e598-4a3d-9225-66a96a52d406_medium.jpg",
      responsibility: 'Building Agritech startups in India',
      position: 'CEO and Co-Founder of Our Food. Passionate entrepreneur focusing on AgriTech (Food Supply Chain)',
      fromTime: 'Feb 23, 2018 11:00 AM ',
      toTime: 'Feb 23, 2018 1:00 PM',
      skillTag: 'Agriculture',
      socMedia: {facebook:'#',
      twitter:'#',
     linkedin:'#'},
      about: 'I am Bala Reddy, an MBA in agro business management from IIM Ahmedabad and B.Tech from NIT Warangal. I have worked in various companies across sectors over years before I took the path towards entrepreneurship. It was in April 2016 that I started with my dream venture "Our Food". Our Food is a technology enabled platform that connects farmers and bulk buyers through a chain of low cost warehouses and processing centers a t the farm level, eliminating the need of middlemen. Recently, Our Food has been honored with the Star Innovator Of the Year award by Telanagana Government.',
      resources: ['https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
    },{
      speakerName: 'Arjun Maheshwari',
      img:"../images/49c58a50-12fe-429f-9420-d8558e861ebf_medium.jpg",
      responsibility: 'Marketing Automation for Startups',
      position: 'Co-Founder at Betaout.com, An Omni-Channel Marketing Automation Tool',
      fromTime: 'Mar 8, 2018 11:00 AM',
      toTime: 'Mar 8, 2018 1:00 PM',
      skillTag: 'Marketing Automation',
      socMedia: {
        facebook: '#',
        twitter:'#',
        linkedin: '#'
      },
      about: "I'm Arjun, Co-founder and COO at Betaout.com , an Omni-Channel Marketing Automation Tool. Our powerful machine learning algorithms help digital marketers do meaningful marketing across channels.",
      resources: ['https://economictimes.indiatimes.com/small-biz/startups/betaout-the-marketing-platform-that-has-tinders-sam-yagan-excited/articleshow/56231885.cms','https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
     }, {
      speakerName: 'Bala Reddy',
      img:"../images/ad77f88e-e598-4a3d-9225-66a96a52d406_medium.jpg",
      responsibility: 'Building Agritech startups in India',
      position: 'CEO and Co-Founder of Our Food. Passionate entrepreneur focusing on AgriTech (Food Supply Chain)',
      fromTime: 'Feb 23, 2018 11:00 AM ',
      toTime: 'Feb 23, 2018 1:00 PM',
      skillTag: 'Agriculture',
      socMedia: {facebook:'#',
      twitter:'#',
     linkedin:'#'},
      about: 'I am Bala Reddy, an MBA in agro business management from IIM Ahmedabad and B.Tech from NIT Warangal. I have worked in various companies across sectors over years before I took the path towards entrepreneurship. It was in April 2016 that I started with my dream venture "Our Food". Our Food is a technology enabled platform that connects farmers and bulk buyers through a chain of low cost warehouses and processing centers a t the farm level, eliminating the need of middlemen. Recently, Our Food has been honored with the Star Innovator Of the Year award by Telanagana Government.',
      resources: ['https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
    },{
      speakerName: 'Arjun Maheshwari',
      img:"../images/49c58a50-12fe-429f-9420-d8558e861ebf_medium.jpg",
      responsibility: 'Marketing Automation for Startups',
      position: 'Co-Founder at Betaout.com, An Omni-Channel Marketing Automation Tool',
      fromTime: 'Mar 8, 2018 11:00 AM',
      toTime: 'Mar 8, 2018 1:00 PM',
      skillTag: 'Marketing Automation',
      socMedia: {
        facebook: '#',
        twitter:'#',
        linkedin: '#'
      },
      about: "I'm Arjun, Co-founder and COO at Betaout.com , an Omni-Channel Marketing Automation Tool. Our powerful machine learning algorithms help digital marketers do meaningful marketing across channels.",
      resources: ['https://economictimes.indiatimes.com/small-biz/startups/betaout-the-marketing-platform-that-has-tinders-sam-yagan-excited/articleshow/56231885.cms','https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
     }, {
      speakerName: 'Bala Reddy',
      img:"../images/ad77f88e-e598-4a3d-9225-66a96a52d406_medium.jpg",
      responsibility: 'Building Agritech startups in India',
      position: 'CEO and Co-Founder of Our Food. Passionate entrepreneur focusing on AgriTech (Food Supply Chain)',
      fromTime: 'Feb 23, 2018 11:00 AM ',
      toTime: 'Feb 23, 2018 1:00 PM',
      skillTag: 'Agriculture',
      socMedia: {facebook:'#',
      twitter:'#',
     linkedin:'#'},
      about: 'I am Bala Reddy, an MBA in agro business management from IIM Ahmedabad and B.Tech from NIT Warangal. I have worked in various companies across sectors over years before I took the path towards entrepreneurship. It was in April 2016 that I started with my dream venture "Our Food". Our Food is a technology enabled platform that connects farmers and bulk buyers through a chain of low cost warehouses and processing centers a t the farm level, eliminating the need of middlemen. Recently, Our Food has been honored with the Star Innovator Of the Year award by Telanagana Government.',
      resources: ['https://techcrunch.com/2016/04/19/betaout/','https://www.techinasia.com/betaout-marketing-software-for-ecommerce']
    }];

    this.dummyActivity = [{name:'Raju Jha',
    activity:'joined startup byte'},{name:'Zone Startup India',
  activity:'joined startup byte'},{name:'Raju Jha',
  activity:'answered a question'},{name:'Srinivas N',
  activity:'Added an organisation'},{name:'Raju Jha',
  activity:'joined startup byte'},{name:'Zone Startup India',
  activity:'joined startup byte'},{name:'Raju Jha',
  activity:'answered a question'},{name:'Srinivas N',
  activity:'Added an organisation'},{name:'Raju Jha',
  activity:'joined startup byte'},{name:'Zone Startup India',
  activity:'joined startup byte'},{name:'Raju Jha',
  activity:'answered a question'},{name:'Srinivas N',
  activity:'Added an organisation'}];
  })
  .controller('MainCtrl', ['$scope', '$routeParams', '$location','dataFactory', function ($scope, $routeParams, $location, dataFactory) {
    $scope.toggleExpand = () => {
      if ($scope.infoExpand) $scope.infoExpand = false;
      else $scope.infoExpand = true;
    };

    $scope.activity = dataFactory.dummyActivity;
    $scope.speakerlist = dataFactory.speakers;

    $scope.go = function (path) {
      $location.path(path);      
    }
    var name = $routeParams.profileName;
    $scope.yname = name;
    for (var i = 0; i < $scope.speakerlist.length; i++) {
      if ($scope.speakerlist[i].speakerName === name) {
        $scope.currentProfile = $scope.speakerlist[i];
        break;
      }
    };
    

    
  }]);
  
