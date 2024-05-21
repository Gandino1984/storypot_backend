import projectModel from "../models/projectModel.js";

const getAll = async()=>{
    try {
        const projects = await projectModel.find();
        return projects;
    } catch(error){
        console.error(error); 
        return [];
    }
}

const getById = async(id)=>{
    try {
        const project = await projectModel.findById(id);
        return project;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const create = async(data) =>{
    try {
        const project = await projectModel.create(data);
        return project;
    } catch(error){
        console.error(error);
        return null;
    }
}

const update = async(id,data)=>{
    try {
        const project = await projectModel.findByIdAndUpdate();
        return project;
    } catch (error) {
        console.error(error);
        return null;
    }    
}

const remove = async(id) =>{
    try {
        const project = await projectModel.findByIdAndDelete(id);
        return project;
    }catch (error) {
        console.error(error);
        return null;
    }
}

const addUser = async(projectId, userId)=>{
    try {
        const project = await getById(projectId);
        if(!project.users_project.includes(userId)){
            project.users_project.push(userId);
            await project.save();
            return project;
        }

    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeUser = async()=>{
    try {
        const project = await getById(projectId);
        if(!project.users_project.includes(userId)){
            project.users_project = project.users_project.filter(u=>u!==userId);
            await project.save();
            return project;
        }

    } catch (error) {
        console.error(error);
        return null;
    }   
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser
}

export default functions;