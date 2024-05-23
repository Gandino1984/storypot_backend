import userController from "./userController.js"

const getAll = async (req, res)=>{
    const users = await userController.getAll();
    res.json({data:users});
}

const getById = async (req, res)=>{
    const user = await userController.getById(req.params.id);
    res.json({data:user});
}

const getByProperty=async(req,res)=>{
    const {property, value} = req.query;
    const users = await userController.getByProperty(property, value);
    res.json({data:users});
}

const create = async (req, res)=>{
    const user = await userController.create(req.body);
    res.json({data:user});
}

const update = async (req, res)=>{
    const user = await userController.update(req.params.id, req.body);
    res.json({data:user});
}

const remove = async (req, res)=>{
 const id = req.params.id;
 const user = await userController.remove(id);
 res.json({data:user});
}

const functions = {
    getAll,
    getById,
    create,
    update,
    getByProperty,
    remove
}

export default functions;