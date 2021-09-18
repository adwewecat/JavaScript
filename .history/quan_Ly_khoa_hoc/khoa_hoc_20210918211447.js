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
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})" >Xóa &times;</button>
                <button id ="update-${course.id}" onclick="handleUpdateCourse(${course.id})">Sửa</button>
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



function updateCourse(courseId, data, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi + '/' + courseId, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleUpdateCourse(courseId) {
    var name = document.querySelector('input[name="name"]');
    var desc = document.querySelector('input[name="description"]');

    var getName = document.querySelector('.title-' + courseId).innerText;
    var getDesc = document.querySelector('.desc-' + courseId).innerText;
    var createBtn = document.querySelector("#create");
    var updateBtn = document.querySelector("#update");
    var cancelBtn = document.querySelector("#cancel");

    name.value = getName;
    desc.value = getDesc;

    createBtn.classList.add('hide');
    updateBtn.classList.remove('hide');
    cancelBtn.classList.remove('hide');

    updateBtn.onclick = function() {
        var formData = {
            name: name.value,
            desc: desc.value
        }
        updateCourse(courseId, formData, function() {
            getCourse(renderCourses);
        })
    }

    cancelBtn.onclick = function() {
        name.value = '';
        desc.value = '';
        createBtn.classList.remove('hide');
        updateBtn.classList.add('hide');
        cancelBtn.classList.add('hide');
    }

}