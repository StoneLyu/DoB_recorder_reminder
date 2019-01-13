var Datastor = require('nedb')
var db = new Datastor({filename: '/file/DoB.nedb', autoload: true})
const path = require('path')
const fs = require('fs')

const dbAccess = {
    findAll: function () {
        db.find({})
            .sort({'DoB': 1}) // 1 升序， -1 降序
            .exec(function (err, docs) {
                if (!err) {
                    console.log(docs)
                } else {
                    console.log(err)
                }
            })
    },

    findOneWeek: function () {
        // 按日期排序，取出最近七日的
        // 自己实现
        // db.find({$elemMatch: {"DoB": {$gt: }}})
    },

    insertOne: function (doc) {
        db.insert(doc, function (err, newDoc) {
            if (newDoc != null) {
                console.log(newDoc)
            } else {
                console.log(err)
            }
        })
    },

    importRecords: function () {
        // 先读文件，转为JSON形式
        // 然后db.insert([{}, {}], function (err, newDoc) {})
    },

    updateOne: function (doc) {
        // 在输入端控制用户输入
        db.update({'_id': doc._id}, {$set: {'DoB': doc.DoB, 'category': doc.category}}, {}, function (err, numReplaced) {
            if (err != null) {
                console.log(err)
            } else {
                console.log(numReplaced)
            }
        })
    },

    deleteOne: function (doc) {
        db.remove({'_id': doc._id}, {}, function (err, numReplaced) {
            if (err != null) {
                console.log(err)
            } else {
                console.log(numReplaced)
            }
        })
    },

    deleteAll: function () {
        db.remove({}, {multi: true}, function (err, numReplaced) {
            if (err != null) {
                console.log(err)
            } else {
                console.log(numReplaced)
            }
        })
    },

    exportRecords: function () {
        // 选定输出位置，并创建KeepinTouch_date.nedb文件
        // 输出所有记录，保存关闭
        const exportFileName = path(__dirname, 'KeepinTouch_' + Date.now() + '.nedb')
        let DBData = ''
        db.find({}, function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                DBData = docs
            }
        })

        const fd = fs.writeFile(exportFileName, DBData, 'w+', function (err) {
            if (err) {
                console.log(err)
            } else {

            }
        })

        fs.close(fd, function (err) {
            if (err) {
                console.log(err)
            } else {

            }
        })
    }
}

module.exports = dbAccess
