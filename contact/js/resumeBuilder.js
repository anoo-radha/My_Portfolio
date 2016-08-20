// Build four JSONs, each one representing a different resume section.
// JSONs are formatted correctly using JSONlint.com.

var bio={
    "name":"Anuradha Ohm",
    "role":"Android Developer",
     "contacts": {
        "mobile number": "415-205-6988 ",
        "email address": "anoo_radha@outlook.com",
        "github username": "anoo-radha",
        "github url": "https://github.com/anoo-radha",
        "twitter handle": " ",
        "linkedIn":"Anuradha Ohm",
        "linkedIn url":"https://www.linkedin.com/in/anuradhao",
        "location": "Atlanta, GA "
    },
    "display":function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole).prepend(formattedName);

        $("#header").append(HTMLmobile.replace("%data%", bio.contacts["mobile number"]));
        $("#header").append(HTMLemail.replace("%data%", bio.contacts["email address"]).replace("%content%", "mailto:"+bio.contacts["email address"]));
        // $("#header").append(HTMLgithub.replace("%data%", bio.contacts["github username"])
        //     .replace("%content%", bio.contacts["github url"]));
        // $("#header").append(HTMLlinkedIn.replace("%data%", bio.contacts["linkedIn"])
        //      .replace("%content%", bio.contacts["linkedIn url"]));
        // $("#header").append(HTMLblog.replace("%data%", bio.blog));
        $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
    }
};

bio.display();

