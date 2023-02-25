// import Database connection from config folder
let db = require('../config');
// Import bycrypt module
let {hash, compare, hashSync} = require('bcrypt');

let {createToken} = require('../middleware/authenticatedUser.js');

// User class
class User{
    
}