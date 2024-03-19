
const { Admin } = require{"../db"}
function adminMiddleware(req, res, next) {

    const  username = req.headers.username
    const  password = req.headers.password
    Admin.findOne({ username: username, password: password})
    .then((value)=>{
        if(value){
            next();
        }
        else{
            res.json(403).json({ msg : "Invalid username or password"})
        }
    })
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;