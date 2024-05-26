import projectController from "./projectController.js"

const getAll = async (req, res)=>{
    const projects = await projectController.getAll();
    res.json({data:projects});
}

const getById = async (req, res)=>{
    const project = await projectController.getById(req.params.id);
    res.json({data:project});
}

const getByProperty=async(req,res)=>{
    const {property, value} = req.query;
    const project = await projectController.getByProperty(property, value);
    res.json({data:project});
}

const create = async (req, res)=>{
    const project = await projectController.create(req.body);
    res.json({data:project});
}

const update = async (req, res)=>{
    const project = await projectController.update(req.params.id, req.body);
    res.json({data:project});
}

const remove = async (req, res)=>{
 const id = req.params.id;
 const project = await projectController.remove(id);
 res.json({data:project});
}

const addUser = async (req, res)=>{
    const projectId = req.params.id;
    const userId = req.body.userId; 
    const project = await projectController.addUser(projectId, userId);
    res.json({data:project});
}

const removeUser = async (req, res)=>{
    const projectId = req.params.id;
    const userId = req.body.userId; 
    const project = await projectController.removeUser(projectId, userId);
    res.json({data:project});
}


const functions = {
    getAll,
    getById,
    create,
    update,
    getByProperty,
    remove,
    removeUser,
    addUser
}

export default functions;