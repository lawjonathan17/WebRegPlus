/* content.js

   This file parses the HMTL of the Schedule of Classes web page on UCI's WebReg and
   looks at the list of courses and searches ratemyprofessors.com with the name of the
   teacher.
*/

// Course List contains all course data
var courseList = document.getElementsByClassName( "course-list" );

// Data gets all table data elements. Table data elements contain the instructor's last name 
var data = document.getElementsByTagName( 'td' );

// Iterate through all TD elements
for ( var i = 0; i < data.length; i++ )
{
    // Conditionals to extract only the professor's last names and ignore info such as schedule of the class
    if ( data[i].backgroundColor = "D5E5EFF" && ( data[i].innerHTML.indexOf( "," ) != -1 ) )
    {
        if ( data[i].innerHTML.indexOf( "<" ) == -1 && data[i].innerHTML.indexOf( ":" ) == -1 && data[i].innerHTML.indexOf( "&" ) == -1 )
        {
            // Create the URL with the professor's last name
            var fullProfessorName = data[i].innerHTML;
            var splitName = fullProfessorName.split( ',' );
            var baseUrl = "http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=University+of+California+Irvine&queryoption=HEADER&query=NAME&facetSearch=true[1]";
            var newUrl = baseUrl.replace( "NAME", splitName[0] );
           
            var link = document.createElement( 'a' );
            link.setAttribute( "href", newUrl ) ;
            link.innerHTML = "RMP";
            data[i].appendChild( link );
        }
    }
}
