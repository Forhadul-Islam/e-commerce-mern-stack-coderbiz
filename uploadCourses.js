const Course = require('./schemas/course');l
const courses = require('./data');


Course.create(courses).then(res => console.log(res))