const jwt = require('jsonwebtoken');
const { UserModel } = require('../../Model/User');


const UserCreate = async (req, res) => {
    try {
        const { user_name, user_email, phone_number, message, status } = req.body;

        const InsertOBJ = { user_name, user_email, phone_number, message, status };

        const user = await UserModel.create(InsertOBJ);

        const token = jwt.sign(
            {
                id: user._id,
                useremail: user.useremail
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(201).json({
            _status: true,
            _message: "User created successfully",
            _data: user,
            token
        });

    } catch (error) {
        console.error(error.message);

        return res.status(500).json({
            _status: false,
            _message: "Internal server error",
            _error: error.message
        });
    }
};


const UserView = async (req, res) => {
    try {
        const users = await UserModel.find().sort({ createdAt: -1 });

        return res.status(200).json({
            _status: true,
            _message: 'Users fetched successfully',
            _total: users.length,
            _data: users
        });

    } catch (error) {
        res.status(500).json({
            _status: false,
            _message: 'Internal server error',
            _error: error.message
        });
    }
};


const UserUpdate = async (req, res) => {
    try {
        const { id } = req.params;

        const { user_name, user_email, phone_number, message, status } = req.body;

        let updateData = { user_name, user_email, phone_number, message, status }

        const user = await UserModel.findByIdAndUpdate(
            { _id: id },
            { $set: updateData },
        );

        if (!user) {
            return res.status(404).json({
                _status: false,
                _message: 'User not found'
            });
        }

        res.status(200).json({
            _status: true,
            _message: 'User updated successfully',
            _data: user
        });

    } catch (error) {

        res.status(500).json({
            _status: false,
            _message: 'Internal server error',
            _error: error.message
        });
    }
};


const UserDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                _status: false,
                _message: 'User not found'
            });
        }

        res.status(200).json({
            _status: true,
            _message: 'User deleted successfully',
            _data: user
        });

    } catch (error) {
        res.status(500).json({
            _status: false,
            _message: 'Internal server error',
            _error: error.message
        });
    }
};


const SingleUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({
                _status: false,
                _message: 'User not found'
            });
        }

        res.status(200).json({
            _status: true,
            _message: 'User fetched successfully',
            _data: user
        });

    } catch (error) {
        res.status(500).json({
            _status: false,
            _message: 'Internal server error',
            _error: error.message
        });
    }
};


module.exports = { UserCreate, UserView, UserUpdate, UserDelete, SingleUser };