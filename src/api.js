const host = 'http://localhost:4000'

module.exports = {
    auth : {
        login : host + '/api/users/login',
    },
    course : {
        addCourse : host + '/api/courses/addcourse',
        getAllCourses : host + '/api/courses/getcourses',
        getCourse : host + '/api/courses/getcourse'
    }
}