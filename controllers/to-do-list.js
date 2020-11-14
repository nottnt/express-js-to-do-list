const toDoList = require('../services/to-do-list')

module.exports.setup = function (app) {
    /**
     * @swagger
     * /to-do-list:
     *   get:
     *     description: getToDoList
     *     tags:
     *       - CRUD
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Get To Do List success
     *     parameters:
     *       - in: query
     *         name: id
     *         default: "1"
     *         schema:
     *           type: string
     */

    app.get('/to-do-list', async (req, res) => {
        const result = await toDoList.getToDoList(req, res)

        res.send({ success: true, data: result, message: 'get successful' })
    })

    /**
     * @swagger
     * /to-do-list:
     *   post:
     *     description: postToDoList
     *     tags:
     *       - CRUD
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: CRUD
     *         schema:
     *           type: object
     *           properties:
     *               title:
     *                   type: string
     *               date:
     *                   type: string
     *     responses:
     *       200:
     *         description: Create To Do List success
     */

    app.post('/to-do-list', async (req, res) => {
        const result = await toDoList.postToDoList(req, res)

        if (result.success) res.send(result)
        else res.status(result.statusCode).send(result.message)
    })

    /**
     * @swagger
     * /to-do-list:
     *   put:
     *     description: putToDoList
     *     tags:
     *       - CRUD
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: CRUD
     *         schema:
     *           type: object
     *           properties:
     *               id:
     *                  type: integer
     *                  default: 1
     *               title:
     *                   type: string
     *               date:
     *                   type: string
     *     responses:
     *       200:
     *         description: Update To Do List success
     */

    app.put('/to-do-list', async (req, res) => {
        const result = await toDoList.putToDoList(req, res)

        if (result.success) res.send(result)
        else res.status(result.statusCode).send(result.message)
    })

    /**
     * @swagger
     * /to-do-list/{id}:
     *   delete:
     *     description: putToDoList
     *     tags:
     *       - CRUD
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         type: string
     *         required: true
     *     responses:
     *       200:
     *         description: Update To Do List success
     */

    app.delete('/to-do-list/:id', async (req, res) => {
        const { id } = req.params
        if (!id) {
            res.status(404).send('must send id')
            return
        }

        const result = await toDoList.deleteToDoList(req, res)

        if (result.success) res.send(result)
        else res.status(result.statusCode).send(result.message)
    })
}
