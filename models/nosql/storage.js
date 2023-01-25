const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
        },

    },
    {
        timestamps: true, // todo: registrar createdAt, updateAt (fecha de creacion y de actualizacion)
        versionKey: false,
    }
);

module.exports = mongoose.model("storages", StorageSchema)