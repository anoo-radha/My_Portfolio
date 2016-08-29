## My Portfolio
Basic portfolio page that will be responsive on different devices sizes (like laptop, tablet and mobile).    

This portfolio was built using Bootstrap framework and some personalized styling using CSS.
Structure of the page (in index.html) is separate from the design/style of the page (in styles.css and boostrap css files). 
HTML and CSS are validated against the W3C's Validators.

The page is structured using sections class. All projects listed on the main portfolio page can be clicked to open up a modal with a brief description of 
the project. Each project also has a link to source code on my Github. The main files for the portfolio page are:
- index.html: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume.
- js/: The jQuery and bootstrap library.
- css/: Contains all of the CSS needed to style the page- bootstrap styling files and style.css(for personalized styling)
and images in the images directory.

The two buttons on the header link to my resume and my contact page.
####Resume and Contact page
These pages were built from the JSON objects(one for each section) using Javascript and jQuery, and combined with the
pre-written HTML5 and CSS3 templates.  [JSONlint](http://jsonlint.com/) was used to check the JSON object format. Information about 
click locations on the page is logged using console.log().Main files include:
- index.html: Basic HTML template. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
- js/helper.js: Contains all of the helper code needed to format the resume(as variable). It also has a few function shells for additional functionality.
- js/resumeBuilder.js: The JSON objects were created using a standard schema and then personalized with my information.
Substrings like ```%data%``` and ```%content%``` in the variable string values (in helper.js) must be replaced with the data
from JSON objects by traversing the DOM, and the formatted result is then appended or prepended to the resume in the appropriate location.
- js/jQuery.js: The jQuery library.
- css/style.css: Contains all of the CSS needed to style the page.
and some images in the images directory.

jQuery’s ```selector.append()``` and ```selector.prepend()``` functions were used to modify index.html. Also the 
JavaScript's method ```string.replace(old, new)``` was used to swap out all the placeholder text (e.g. %data%) for data from the JSON objects.

I created this after taking the HTML, CSS and Javascript courses provided by Udacity.
