import resourceModel from "../models/resourceModel.js";
import projectModel from "../models/projectModel.js";

const getAll = async()=>{
    try {
        const resources = await resourceModel.find();
        return resources;
    } catch(error){
        console.error(error); 
        return [];
    }
}

const getById = async(id)=>{
    try {
        const resource = await resourceModel.findById(id);
        return resource;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const create = async(data) =>{
    try {
        const resource = await resourceModel.create(data);
        return resource;
    } catch(error){
        console.error(error);
        return null;
    }
}

const update = async(id,data)=>{
    try {
        const resource = await resourceModel.findByIdAndUpdate(id,data);
        return resource;
    } catch (error) {
        console.error(error);
        return null;
    }    
}

const remove = async(id) =>{
    try {
        const resource = await resourceModel.findByIdAndDelete(id);
        return resource;
    }catch (error) {
        console.error(error);
        return null;
    }
}

const addUser = async(projectId, userId)=>{
    try {
        const project = await getById(projectId);
        if(!project.fkUsers.includes(userId)){
            project.fkUsers.push(userId);
            await project.save();
            return project;
        }

    } catch (error) {
        console.error(error);
        return null;
    }
}

const removeUser = async(projectId, userId)=>{
    try {
        const project = await getById(projectId);
        if(!project.fkUsers.includes(userId)){
            project.fkUsers = project.fkUsers.filter(u=>u!==userId);
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