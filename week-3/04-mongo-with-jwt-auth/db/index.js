const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kuldeep:simon@cluster0.ygqebfp.mongodb.net/?retryWrites=true&w=majority");
// Connect to MongoDB


// Define schemas
const AdminSchema = new mongoose.Schema({
   
        // Schema definition here
        username: String,
        password: String

    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}