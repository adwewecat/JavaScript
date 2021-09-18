//////////////
////////////


var listCoursesBlock =
    document.querySelector('#list-courses')


var courseApi = 'http://localhost:3000/course'


function start() {
    getCourses(rederCourses);

    handleCreateForm();
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



function rederCourses(courses) {
    var listCoursesBlock =
        document.querySelector('#list-courses')

    var htmls = courses.map(function(course) {
        return `
            <li class="course-item-${course.id}">
                <h4 id ="h4-name-${course.id}" >${course.name}</h4>
                <p id="p-description-${course.id}" >${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})" >Xóa &times;</button>
                <button id ="updateBtn-${course.id}" onclick="handleUpdateCourse(${course.id})">Sửa</button>
            </li>
            `;
    })
    listCoursesBlock.innerHTML = htmls.join('')
}



function handleCreateForm() {
    var createBtn =
        document.querySelector('#create')

    createBtn.onclick = function() {
        var name =
            document.querySelector('input[name="name"]').value
        var description =
            document.querySelector('input[name="description"]').value


        var formData = {
            name: name,
            description: description
        }

        createCourse(formData, function() {
            getCourses(rederCourses);
        })

    }
}


function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}



function handleDeleteCourse(id, callback) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            var courseItem =
                document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        });
}



function updateCourse(data, id, callback) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(courseApi + "/" + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleUpdateCourse(id) {

    var updateBtn =
        document.querySelector('#updateBtn-' + id)


    var name =
        document.querySelector('input[id="h4-name-"]').value
        // var description =
        //     document.querySelector('input[name="description"]').value

    console.log(name)

    // var formData = {
    //     name: name,
    //     description: description
    // }

    // createCourse(formData, function() {
    //     getCourses(rederCourses);
    // })

}