var Datastor = require('nedb');
var db = new Datastor({filename: '/file/DoB.db', autoload: true});

const dbAccess = {
    findAll: function () {
        db.find({})
            .sort({dob: 1})
            .exec(function (err, docs) {
                if (!err) {
                    console.log(docs);
                } else {
                    console.log(err);
                }
            });
    },

    findOneWeek: function () {
        // 按日期排序，取出最近七日的
        db.find({})
            .sort({dob: 1})
            .exec(function (err, docs) {
                if (!err) {
                    console.log(docs);
                } else {
                    console.log(err);
                }
            });
    },

    insertOne: function () {
        // db.
    },

    importRecords: function () {

    },

    updateOne: function () {

    },

    deleteOne: function () {

    },

    exportRecords: function () {

    }
};

module.exports = dbAccess;
