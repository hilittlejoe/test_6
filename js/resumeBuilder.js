/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: 'wuchengqi',
    role: 'Front End Engineer',
    contacts: {
      mobile: '+8618349320983',
      email: 'wuchengqi577@gmail.com',
      github: 'https://github.com/chengqiwu',
      location: 'beijing city'
    },
    welcomeMessage:'write less work more',
    skills: ['css', 'html', 'js'],
    biopic: './images/fry.jpg',
    display: function() {
      }
  };

  $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
  $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
  $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
  // $('#topContacts').append(HTMLblog.replace('%data%', bio.biopic));
  $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
  $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
  $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
  $('#header').append(HTMLskillsStart);
  bio.skills.forEach(function(v) {
    $('#header').append(HTMLskills.replace('%data%', v));
  });
  $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
  $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
  $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
  var education = {
    schools: [{
      name: 'SWPU',
      location: 'Chengdu City',
      degree: 'Network engineering',
      majors: ['data structure', 'operating system', 'OOP'],
      dates: '2013/9/1-2017/6/15',
      url: ''
    }],
    onlineCourses: [{
      title: 'Udacity',
      school: 'Udacity',
      dates: '2017/7/20-2017/9/20',
      url: 'https://udacity.com/'
    }],
    display: function() {}
  };
  $('#education').append(HTMLschoolStart);
  education.schools.forEach(function(school) {
    $('.education-entry').append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
    $('.education-entry').append(HTMLschoolDates.replace('%data%', school.dates));
    $('.education-entry').append(HTMLschoolLocation.replace('%data%', school.location));
    $('.education-entry').append(HTMLschoolMajor.replace('%data%', school.majors));
  });

  $('#education').append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineCourse) {
    $('.online-entry').append(HTMLonlineTitle.replace('%data%', onlineCourse.title) + HTMLonlineSchool.replace('%data%', onlineCourse.school));
    $('.online-entry').append(HTMLonlineDates.replace('%data%', onlineCourse.dates));
    $('.online-entry').append(HTMLonlineURL.replace('%data%', onlineCourse.url));
  })
 
  
  
  var work = {
    jobs: [{
      employer: 'swyd.com',
      title: '三维易达',
      location: 'beijing City',
      dates: 'in progress',
      description: '前端页面开发，与后台进行数据交互'
    }],
    display: function(){}
  };
  $('#workExperience').append(HTMLworkStart);
  work.jobs.forEach(function(job) {
    $('.work-entry').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
    $('.work-entry').append(HTMLworkDates.replace('%data%', job.dates));
    $('.work-entry').append(HTMLworkLocation.replace('%data%', job.location));
    $('.work-entry').append(HTMLworkDescription.replace('%data%', job.description));
  });
  
  
  var projects = {
    projects: [{
      title: 'animal_trading_card',
      dates: '2017/8/10',
      description: '根据设计原型和HTML文件，选择一种自己喜欢的动物，创建动物交换卡',
      images: [],
    }],
    display: function(){}
  };

  $('#projects').append(HTMLprojectStart);
  projects.projects.forEach(function(project) {
    console.log(project)
    $('.project-entry').append(HTMLprojectTitle.replace('%data%', project.title));
    $('.project-entry').append(HTMLprojectDates.replace('%data%', project.dates));
    $('.project-entry').append(HTMLprojectDescription.replace('%data%', project.description));
    $('.project-entry').append(HTMLprojectImage.replace('%data%', project.images));
  });
  
  $('#mapDiv').append(internationalizeButton);
  $('#mapDiv').append(googleMap);

  initializeMap();
  function inName(name) {
    var names = name.split(' ');
    var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1);
    var lastName = name[1].toUpperCase();
    return firstName + lastName;
  }