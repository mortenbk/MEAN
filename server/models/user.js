var mongoose = require("mongoose"),
    encrypt = require("../utilities/encryption");

var userSchema = mongoose.Schema({
    firstName: {type: String, required: "{PATH} is required!"},
    lastName: {type: String, required: "{PATH} is required!"},
    userName: {
        type: String,
        required: "{PATH} is required!",
        unique: true
    },
    salt: {type: String, required: "{PATH} is required!"},
    hashed_pwd: {type: String, required: "{PATH} is required!"},
    roles: [String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashedPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
}

var User = mongoose.model("User", userSchema);


function createDefaultUsers() {
    User.find({}).exec(function(err, collection) {

        if(collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashedPwd(salt, "joe");
            User.create({firstName:"Joe", lastName:"Eames", userName:"joe", salt: salt, hashed_pwd: hash, roles: ["admin"]});
            salt = encrypt.createSalt();
            hash = encrypt.hashedPwd(salt, "joey");
            User.create({firstName:"Joey", lastName:"Eames", userName:"joey", salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashedPwd(salt, "joes");
            User.create({firstName:"Joes", lastName:"Eames", userName:"joes", salt: salt, hashed_pwd: hash});
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;