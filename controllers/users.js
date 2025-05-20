const mongodb = require('../routes/contacts');

const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('Contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);

    });
}

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('Contacts').find({ _id: userId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);

    });
}

const createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req/body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('users').insertOne(user);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the user.');
    }
};

const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const user = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    };
    const response = await mongodb.getDatabase().db().collection('users').replaceOne({ _id: userId }, user);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(response.error || 'Some error occurred whilte updating the user.');
        }
}

const deleteUser = async(req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('users').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the user.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser,
};
