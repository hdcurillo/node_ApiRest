const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: ["user", "admin"],
            default: "user",
        }
    },
    {
        timestamps: true, // todo: registrar createdAt, updateAt (fecha de creacion y de actualizacion)
        versionKey: false,
    }
);

module.exports = mongoose.model("users", UserSchema)