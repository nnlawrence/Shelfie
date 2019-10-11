module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_products()
        .then(dbInstance => res.status(200).send(dbInstance))
        .catch(err => {
            res.status(500).send({errormessage: 'Try Again'})
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, price, img } = req.body

        db.add_product([name, price, img])
        .then(dbInstance => res.status(200).send(dbInstance))
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { name, price, img } = req.body
        db.update_comment([id, name, price, image])
        .then(dbInstance => res.status(200).send(dbInstance))
    },
    // deleteProduct: (req, res) => {
    //     const db = req.app.get('db')

    // }
}