import userModel from "../models/userModel.js";

const getAll = async()=>{
    try {
        const users = await userModel.find();
        return users;
    } catch(error){
        console.error(error); 
        return [];
    }
}

const getById = async(id)=>{
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const create = async(data) =>{
    try {
        const user = await userModel.create(data);
        return user;
    } catch(error){
        console.error(error);
        return null;
    }
}

const update = async(id,data)=>{
    try {
        const user = await userModel.findByIdAndUpdate();
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }    
}

const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
    }catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;