//////////////
////////////


var listCoursesBlock =
    document.querySelector('#list-courses')


var courseApi = 'http://localhost:3000/course'


function start() {
    getCourses(function(courses) {
        rederCourses(courses)
    });
}

start();



//Function
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}



function rederCourses() {
    var listCoursesBlock =
        document.querySelector('#list-courses')

    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
            `;
    })
    listCoursesBlock.innerHTML = htmls.join('')
}