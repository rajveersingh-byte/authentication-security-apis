const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({

    user_name: {
        type: String,
        require: true
    },

    user_email: {
        type: String,
        unique: true,
        require: true
    },


    phone_number: {
        type: String
    },

    message: {
        type: String
    },

    status: {
        type: Boolean,
        default: true
    }

},

    {
        timestamps: true
    }

)

let UserModel = mongoose.model('user', UserSchema);

module.exports = { UserModel };