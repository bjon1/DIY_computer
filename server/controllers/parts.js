import PartsModel from '../models/parts.js'

const get = async (req, res) => {
    try{
        let types = ["cpus", "gpus", "rams", "storage", "motherboards"]
        if(types.includes(req.params.type)){
            const results = await PartsModel.findAll(req.params.type);
            res.status(200).json(results.rows);
        } else {
            res.status(400).json({error: "Invalid type"})
        }
    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

export default {
    get
};