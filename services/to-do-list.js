const mongoUtil = require('../mongoDBUtils')
const ObjectId = require('mongodb').ObjectId

const getToDoList = async (req, res) => {
    try {
        const { id } = req.query
        const db = mongoUtil.getDb()

        let toDoListData = null
        if (id) {
            toDoListData = await db
                .collection('to-do-list')
                .findOne({ _id: ObjectId(id) })
        } else {
            toDoListData = await db.collection('to-do-list').find({}).toArray()
        }

        return toDoListData
    } catch (err) {
        return err
    }
}

const postToDoList = async (req, res) => {
    const db = mongoUtil.getDb()
    const { body } = req

    try {
        const result = await db.collection('to-do-list').insertOne(body)

        return { success: true, data: result.ops, message: 'create successful' }
    } catch (err) {
        return err
    }
}

const putToDoList = async (req, res) => {
    const db = mongoUtil.getDb()

    try {
        const { body } = req
        const { id, title, date } = body
        const filter = { _id: ObjectId(id) }
        const options = { upsert: false }
        const updateDoc = {
            $set: {
                title,
                date,
            },
        }
        const result = await db
            .collection('to-do-list')
            .updateOne(filter, updateDoc, options)

        if (result.matchedCount) {
            return { success: true, message: 'update successful' }
        } else {
            return {
                success: false,
                statusCode: 404,
                message: 'no id match!! update fail',
            }
        }
    } catch (err) {
        return err
    }
}

const deleteToDoList = async (req, res) => {
    const db = mongoUtil.getDb()
    const { id } = req.params

    const result = await db
        .collection('to-do-list')
        .deleteOne({ _id: ObjectId(id) })

    if (result.deletedCount === 1) {
        return { success: true, message: 'delete successful' }
    } else {
        return {
            success: false,
            statusCode: 404,
            message: 'no id match!! delete fail',
        }
    }
}

module.exports = {
    getToDoList,
    postToDoList,
    putToDoList,
    deleteToDoList,
}
