const { matchedData } = require("express-validator");
const { tracksModel } = require("../models")
const { handlehttpError } = require("../utils/handlerError")

/**
 * todo: Obtener una lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({data})
    } catch (error) {
        handlehttpError(res,'ERROR_GET_ITEMS')
    }

}

/**
 * todo: Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data})
    } catch (error) {
        handlehttpError(res,'ERROR_GET_ITEM')
    }
}

/**
 * todo: insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        
        // const body = req.body
        // const { body } = req
        //console.log(body);
        const data = await tracksModel.create(body)
        //res.send({data})
        res.send({data});

    } catch (error) {
        handlehttpError(res,'ERROR_CREATE_ITEM')
    } 
}

/**
 * todo: Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );

        res.send({data});

    } catch (error) {
        handlehttpError(res,'ERROR_UPDATE_ITEM')
    } 
}

/**
 * todo: Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id});
        res.send({data})
    } catch (error) {
        handlehttpError(res,'ERROR_DELETE_ITEM')
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};