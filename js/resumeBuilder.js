const bio = {
    "name": "Matt Shultz",
    "role": "Web Developer",
    "contacts": {
        "mobile": "601-985-7053",
        "email": "matt@popshift.net",
        "github": "popshift",
        "website": "popshift.net",
        "location": "Clinton, MS"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hi, I'm Matt Shultz. I'm a part-time developer and full-time solver. I love building solutions for real-world problems. I have professional experience in web design, graphic design, network/server architecture, and project management. I've challenged myself to become a proficient, full-time JavaScript developer by December 2018.",
    "skills": [
        "Network Infrastructure", "Strategic Planning", "Web/Graphic Design", "Front-end Web Development"
    ],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        // iterate bio.contacts object and append to contacts list
        Object.keys(bio.contacts).forEach(function (key) {
            if(window['HTML' + key]) {
                var formattedProperty = window['HTML' + key].replace("%data%", bio.contacts[key]);
                $("#topContacts").append(formattedProperty);
                $("#footerContacts").append(formattedProperty);
            }
        });

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedMessage);
        
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};


const work = {
    "jobs": [
        {
            "employer": "Telligent Systems",
            "title": "Senior Technology Consultant",
            "location": "Madison, MS",
            "dates": "Jan 2016 - Present",
            "description": "I was hired at Telligent Systems to fulfill several roles. My primary role is the ongoing support of our clients' technical needs, from pre-sales technical consultations to implementation and end-user training/support. I also spend a large portion of my work time developing in-house solutions to efficiency problems, primarily with the development of software-based productivity tools."
        },
        {
            "employer": "Broadband Voice",
            "title": "Technical Services Engineer",
            "location": "Jackson, MS",
            "dates": "Sep 2013 - Nov 2015",
            "description": "At Broadband Voice, I was an onsite service engineer that designed and installed network infrastructure to support VoIP communication equipment. I also provided end-user training/support and performed service and maintenance calls."
        },
        {
            "employer": "Intermix Technologies",
            "title": "Telecommunications Technician",
            "location": "Ridgeland, MS",
            "dates": "Jun 2011 - Aug 2013",
            "description": "I was initially hired at Intermix as a basic onsite technician but quickly took on much more responsibility. I was sent to Mitel University to be trained on several product lines and became the lead project manager for the next several major PBX installations. I remained in this capacity until moving on to Broadband Voice, where I was offered the opportunity to explore where my passion truly was at the time, network infrastructure."
        }
    ],
    "display": function() {
        for(let i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);

            if(i != 0) {
                $('.work-entry:last').append('<hr>');
            }
    
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

const education = {
    "schools": [
        {
            "name": "Hinds Community College",
            "location": "Ridgeland, MS",
            "degree": "Associate of Science",
            "majors": [
                "Computer Science"
            ],
            "dates": "2008 - 2010"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2018",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function() {
        for(let i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
    
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    
            $('.education-entry:last').append(formattedName + formattedDegree);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedLocation);

            // iterate schools.majors array and append to school entry
            for(let x = 0; x < education.schools[i].majors.length; x++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[x]);

                $(".education-entry:last").append(formattedMajor);
            }
        }
        
        if(education.onlineCourses.length > 0) {
            // Add Online Classes header
            $('#education').append(HTMLonlineClasses);

            for(let i = 0; i < education.onlineCourses.length; i++) {
                $('#education').append(HTMLschoolStart);
        
                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        
                $('.education-entry:last').append(formattedTitle + formattedSchool);
                $('.education-entry:last').append(formattedDates);
                $('.education-entry:last').append(formattedURL);
    
            }
        }
        
    }
};

const projects = {
    "projects": [
        {
            "title": "Memory Game",
            "dates": "Apr/May 2018",
            "description": "Memory Game is a simple card-matching game created for the Udacity Front-End Web Developer Nanodegree Program.",
            "images": [
                "images/projects/memory.jpg",
                "images/projects/memory_win.jpg",
                "images/projects/memory.gif"
            ],
            "demo": "https://popshift.net/memory"
        },
        {
            "title": "Classic Arcade",
            "dates": "Jul/Aug 2018",
            "description": "Classic Arcade is a Frogger-style clone created for the Udacity Front-End Web Developer Nanodegree Program.",
            "images": [
                "images/projects/arcade.jpg",
                "images/projects/arcade.gif"
            ],
            "demo": "https://popshift.net/arcade"
        }
    ],
    "display": function() {
        for(let i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            formattedTitle = formattedTitle.replace("#", projects.projects[i].demo);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // iterate projects.images array and append to project list
            for(let x = 0; x < projects.projects[i].images.length; x++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);

                $(".project-entry:last").append(formattedImage);
            }
            
        }
    }
};

bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);