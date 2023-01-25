const customHeader = (req, res, next) => {
    try {
        const apikey = req.headers.api_key;
        if(apikey === 'henry13'){
            next();
        }else{
            res.status(403)
            res.send({error:"API_KEY_NO_ES_CORRECTA"})
        }
    } catch (error) {
        res.status(403)
        res.send({error:"Algo_ocurrio_en_el_custom_header"})
    }
}

module.exports = customHeader