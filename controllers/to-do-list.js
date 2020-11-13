const toDoList = require('../src/to-do-list')

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

    app.get('/to-do-list', toDoList.getToDoList)

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
     *         name: user
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

    app.post('/to-do-list', toDoList.postToDoList)

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
     *         name: user
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

    app.put('/to-do-list', toDoList.putToDoList)

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
     *         type: integer
     *         required: true
     *     responses:
     *       200:
     *         description: Update To Do List success
     */

    app.delete('/to-do-list/:id', toDoList.deleteToDoList)
}
