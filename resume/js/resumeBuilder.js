// Build four JSONs, each one representing a different resume section.
// JSONs are formatted correctly using JSONlint.com.
var work = {
    "jobs": [{
        "employer": "Soft Tech",
        "title": "Android Developer",
        "location": "Remote ",
        "dates": "2014-15",
        "description": "Developed Dhyana app for Android"
    }, {
        "employer": "Technology",
        "title": "Android Developer",
        "location": " Remote",
        "dates": "2015-16",
        "description": "Developed Popular Movies app for Android"
    }]
};

var projects = {
    "projects": [{
        "title": " Dhyana",
        "dates": "2014-15",
        "description": "How to mediate and its benefits",
        "images": [" ", " "]
    }, {
        "title": "Popular movies",
        "dates": "2015-16",
        "description": "Displays movies in 2 different sort orders and saves favorites",
        "images": [" ", " "]
    }],
    "display":function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         // var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images);
        $(".project-entry:last").append(formattedProjectDesc+"<br>");
    }
}
};

var bio={
    "name":"Anuradha Ohm",
    "role":"Android Developer",
    "welcomeMessage": "Love to be an Android Developer and earn something :)",
    "biopic": "images/Anu.png ",
    "contacts": {
        "mobile number": "415-205-6988 ",
        "email address": "anoo_radha@outlook.com",
        "github username": "anoo-radha",
        "github url": "https://github.com/anoo-radha",
        "twitter handle": " ",
        "linkedIn":"Anuradha Ohm",
        "linkedIn url":"https://www.linkedin.com/in/anuradhao",
        "stackoverflow":"anoo-radha",
        "stackoverflow url":"http://stackoverflow.com/users/6616489/anoo-radha",
        "location": "Atlanta, GA "
    },
    "skills": ["Android ","Java ","C ","C++ ","HTML ","CSS ","Javascript"],
    "display":function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole).prepend(formattedName);

        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts["mobile number"]));
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts["email address"]).replace("%content%", "mailto:"+bio.contacts["email address"]));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts["github username"])
            .replace("%content%", bio.contacts["github url"]));
        formattedContactInfo.push(HTMLlinkedIn.replace("%data%", bio.contacts["linkedIn"])
             .replace("%content%", bio.contacts["linkedIn url"]));
        formattedContactInfo.push(HTMLstackOverflow.replace("%data%", bio.contacts["stackoverflow"])
             .replace("%content%", bio.contacts["stackoverflow url"]));
        // formattedContactInfo.push(HTMLblog.replace("%data%", bio.blog));
        // formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        for(count in formattedContactInfo) {
            $("#topContacts").append(formattedContactInfo[count]);
            $("#footerContacts").append(formattedContactInfo[count]);
        }
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedPic).append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(current_val){
            var formattedSkills = HTMLskills.replace("%data%", current_val);
            $("#header").append(formattedSkills);
        });
    }
};

var education={
    "schools": [{
        "name": "University of Madras",
        "location": "India",
        "dates": " 1997-2001",
        "url": " ",
        "degree": ["Bachelor of engineering"],
        "majors":["computer science engineering"]
    }],
    "onlineCourses": [{
        "title": "Android Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Android Basics",
        "school": "Udacity",
        "dates": "2015",
        "url": "https://www.udacity.com"
    }],
    "certificates":[{
        "title": "CPA - C++ Certified Associate Programmer  ",
        "url": "https://education.cppinstitute.org/certificates/verify/5RPk.DVep.IlsS",
        "description": "Pearson VUE"
    },{
        "title": "CLA - C programming Language Certified Associate",
        "url": "https://education.cppinstitute.org/certificates/verify/xs3y.cd37.Om3O",
        "description": "Pearson VUE"
    }],
    "display":function(){
    if(education.schools.length > 0 || education.onlineCourses.length > 0 || education.certificates.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            // .replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree)
                .append(formattedSchoolDates)
                .append(formattedSchoolLocation)
                .append(formattedSchoolMajor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                // .replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle +
                            formattedOnlineSchool+formattedOnlineDates);
                if(i==education.onlineCourses.length-1)
                    $(".education-entry:last").append(formattedOnlineURL);
                else
                    $(".education-entry:last").append(formattedOnlineURL+"<hr>");
            }
        }
        if(education.certificates.length > 0) {
            $("#education").append(HTMLCertificates);
            for(i in education.certificates) {
                $("#education").append(HTMLschoolStart);
                var formattedCertificateDesc = HTMLcertificateDescription.replace("%data%", education.certificates[i].description);
                var formattedCertificateTitle = HTMLcertificateTitle.replace("%data%", education.certificates[i].title)
                .replace("#", education.certificates[i].url);
                $(".education-entry:last").append(formattedCertificateTitle);
                if(i==education.onlineCourses.length-1)
                    $(".education-entry:last").append(formattedCertificateDesc);
                else
                    $(".education-entry:last").append(formattedCertificateDesc+"<hr>");
            }
        }
    }
}
};

function displayWork(){
    for(count in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    // console.log(work.jobs[count].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[count].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[count].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[count].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);
    $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedWorkDescription+"<hr>");
    }
}
displayWork();

bio.display();
projects.display();
education.display();

// $("#mapDiv").append(googleMap);
$('#main').append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
