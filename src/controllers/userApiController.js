import userController from "./userController.js"

const getAll = async (req, res)=>{
    const users = await userController.getAll();
    res.json({data:users});
}

const getById = async (req, res)=>{
    const user = await userController.getById(req.params.id);
    res.json({data:user});
}

//getByProperty???

const create = async (req, res)=>{
    const user = await userController.create(req.body);
    res.json({data:user});
}

const update = async (req, res)=>{
    const user = await userController.update(req.params.id, req.body);
    res.json({data:user});
}