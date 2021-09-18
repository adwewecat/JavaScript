var listCoursesBlock =
    document.querySelector('#list-courses')


var courseApi = 'http://localhost:3000/course'


function start() {

}

start();



//Function

function getCourses() {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}