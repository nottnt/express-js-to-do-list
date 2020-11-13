const getToDoList = (req, res) => {
    res.send({ success: true, message: 'get successful' })
}

const postToDoList = (req, res) => {
    res.send({ success: true, message: 'create successful' })
}

const putToDoList = (req, res) => {
    res.send({ success: true, message: 'update successful' })
}

const deleteToDoList = (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(404).send('ID Not found');
        return
    }
    console.log(req.params)
    res.send({ success: true, message: 'delete successful' })
}

module.exports = {
    getToDoList,
    postToDoList,
    putToDoList,
    deleteToDoList
}