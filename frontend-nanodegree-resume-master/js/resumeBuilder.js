var clearFix = "<div style='clear: both;'></div>";

var bio ={
      name: "John Doe",
      role: "Web Developer",
      contacts: {
            mobile: "650-555-5555",
            email: "john@example.com" ,
            github: "johndoe",
            twitter: "@johndoe",
            location: "San Francisco"
      },
      welcomeMessage: "lorem ipsum dolor sit amet etc  etc etc.", 
      skills: ["awesomeness","delivering things","cryogenic sleep","saving the universe"],
      biopic: "images/fry.jpg",
      display: function(){
            
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedGethub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            var fortmattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
            var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").prepend(formattedRole).prepend(formattedName);
            $("#topContacts, #footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGethub).append(formattedTwitter).append(formattedLocation);
            $("#header").append(fortmattedBioPic);
            $("#header").append(formattedWelcomeMsg);
            $("#header").append(HTMLskillsStart);
            
            var formatedSkills =""; 

            for( var i = 0;i<4;i++){
                  formatedSkills += (HTMLskills.replace("%data%", bio.skills[i]));
            }
            
            $("#skills").append(formatedSkills);
              
      }
};
var education ={
      schools: [{
                  name: "Nova Southeastern University",
                  location: "Fort Lauderdale FL",
                  degree: "Masters",
                  majors: ["CS"],
                  dates: "2013"
            },
            {
                  name: "Eckerd Colleage",
                  location: "Saint Petersburg FL",
                  degree: "BA",
                  majors: ["CS"],
                  dates: "2003"
            }],
      onlineCourses: [{
                  title: "JavaScript Crash CourSe",
                  school: "Udacity",
                  dates: "2014",
                  url: "https://www.udacity.com/course/ud404",
            }],   
      display: function(){
            
            $("#education").append(HTMLschoolStart);
            var schoolName, schoolDegree, schoolDates, schoolLocation, schoolMajor;
            
            for( var i =0; i< 2; i++){
                  schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
                  schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                  schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                  schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                  schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
                  
                  $("#education").append(schoolName + schoolDegree).append(schoolDates).append(clearFix).append(schoolLocation).append(schoolMajor);
            }
            var onlineTitle, onlineSchool, onlineDates, onlineURL;
             HTMLonlineTitle = '<a href="#">%data%';
             HTMLonlineSchool = ' - %data%</a>';
             HTMLonlineDates = '<div class="date-text">%data%</div>';
             HTMLonlineURL = '<br><a href="#">%data%</a>';

             $("#education").append(HTMLonlineClasses);
            for(i = 0;i<1;i++){
                  onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                  onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                  onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                  onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                  
                  $("#education").append(onlineTitle + onlineSchool).append(onlineDates).append(onlineURL);
            }           
            //$(".major").css({marginLeft:"-59px"});  
      }
};

var work ={
      jobs: [{
           employer: "Planet Express",
           title: "Delivery Boy", 
           location: "Brooklym, NY",
           dates: "January 3000-Future",
           description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
            employer: "Panussi's Pizza",
            title: "Delivery Boy", 
            location: "Manhatten, NY",
            dates: "January 3000-Future",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  
      }],
      display: function(){
            
            $("#workExperience").prepend(HTMLworkStart);
            var workEmployer, workTitle, workDates, workLocation, workDescription;
            
            for( i =0; i<2; i++){
                  
                  workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                  workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                  workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                  workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                  workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                 
                  $("#workExperience").append(workEmployer + workTitle).append(workDates).append(workLocation).append(workDescription);
            }
      }
};

var projects ={
      projects: [{
            title: "Sample Project 1", 
            dates: "2014",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            images: ["images/197x148.gif","images/197x148.gif"]
      }],
      display: function(){
            
            $("#projects").prepend(HTMLprojectStart);
            var projectTitle, projectDates, projectDescription, projectImage;
            
            for( i =0; i<1; i++){
                  
                  projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                  projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                  projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
                  $("#projects").append(projectTitle).append(projectDates).append(projectDescription);
                  
                  for (var j = 0; j < 2; j++){
                        projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                        $("#projects").append(projectImage);
                  }                  
            }
      }
};

bio.display();
projects.display();
work.display();
education.display();

$("#education, #workExperience, #projects").css({padding:"0 5%"});
$("#education > h2, #education > h3, #workExperience > h2, #projects > h2").css({padding:"10px 0"});

$("#mapDiv").append(googleMap);
