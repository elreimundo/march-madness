;(function() {
  var teams = [
    'Kentucky',
    'Kansas',
    'Notre Dame',
    'Maryland',
    'West Virginia',
    'Butler',
    'Wichita',
    'Cincinnati',
    'Purdue',
    'Indiana',
    'Texas',
    'Buffalo',
    'Valparaiso',
    'Northeastern',
    'New Mexico',
    'Manhattan',
    'Hampton',
    'Wisconsin',
    'Arizona ',
    'Baylor',
    'North Carolina',
    'Arkansas',
    'Xavier',
    'Virginia',
    'Oregon',
    'Oklahoma State',
    'Ohio State',
    'Ole Miss',
    'BYU',
    'Wofford',
    'Harvard',
    'Georgia State',
    'Texas Southern',
    'Coastal Carolina',
    'Duke',
    'Robert Morris',
    'San Diego State',
    'St. John\'s',
    'Utah',
    'Steph. F. Austin',
    'Georgetown',
    'Eastern Washington',
    'SMU',
    'UCLA',
    'Iowa State',
    'UAB',
    'Iowa',
    'Davidson',
    'Gonzaga',
    'North Dakota State',
    'Villanova',
    'Lafayette',
    'NC State',
    'LSU',
    'UNI',
    'Wyoming',
    'Louisville',
    'UC Irvine',
    'Providence',
    'Dayton',
    'Oklahoma',
    'Albany',
    'Michigan State',
    'Georgia',
    'Virginia',
    'Belmont'
  ];

  function Team(name, node) {      
    this.model = new Team.Model(name);
    this.view  = new Team.View({whenClicked: this.select.bind(this)});
    this.view.appendTo(node);
  }

  Team.prototype.select = function() {
    var teamCount = teams.length;
    var randomTeam = teams[Math.floor(Math.random() * teamCount)];
    this.model.setTeam(randomTeam);
    this.view.render(this.model);
    return randomTeam;
  }

  Team.Model = function(name) {  //  ActiveRecord::Base
    this.name = name;
  };

  Team.Model.prototype.setTeam = function(newName) {
    this.name = newName;
  };

  Team.View = function(opts) {
    this.element = document.createElement('div');
    this.element.classList.add('team');
    this.element.addEventListener('click', opts.whenClicked);
  };

  Team.View.prototype.appendTo = function(node) {
    node.appendChild(this.element);
  }

  Team.View.prototype.render = function(model) {
    this.element.innerHTML = model.name;
  }

  var predictorDiv = document.getElementsByClassName('predictor')[0];
  var team = new Team('Chicago Bulls', predictorDiv);

  team.select();
})();