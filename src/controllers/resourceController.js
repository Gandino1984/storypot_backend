import resourceModel from "../models/resourceModel.js";

// This function retrieves all resources from the database and returns them.
// If there is an error, it logs the error and returns an empty array.
const getAll = async()=>{
    try {
        // This line uses the `find` method of the `resourceModel` to retrieve all documents in the collection.
        // The `await` keyword is used to wait for the query to complete before moving on to the next line of code.
        const resources = await resourceModel.find();
        
        // This line returns the retrieved resources.
        return resources;
    } catch(error){
        // If there is an error, this line logs the error to the console.
        console.error(error); 
        
        // This line returns an empty array.
        return [];
    }
}



// This function retrieves a resource from the database by its ID and returns it.
// If there is an error, it logs the error and returns null.
const getById = async(id)=>{
    try {
        // This line uses the `findById` method of the `resourceModel` to retrieve a document by its ID.
        // The `await` keyword is used to wait for the query to complete before moving on to the next line of code.
        const resource = await resourceModel.findById(id);
        
        // This line returns the retrieved resource.
        return resource;
    } catch (error) {
        // If there is an error, this line logs the error to the console.
        console.error(error);
        
        // This line returns null.
        return null;
    }
}


// This function creates a new resource in the database and returns it.
// If there is an error, it logs the error and returns null.
const create = async(data) =>{
    try {
        // This line uses the `create` method of the `resourceModel` to create a new document in the collection.
        // The `await` keyword is used to wait for the query to complete before moving on to the next line of code.
        const resource = await resourceModel.create(data);
        
        // This line returns the newly created resource.
        return resource;
    } catch(error){
        // If there is an error, this line logs the error to the console.
        console.error(error);
        
        // This line returns null.
        return null;
    }
}


// This function updates an existing resource in the database and returns it.
// If there is an error, it logs the error and returns null.
const update = async(id, data) =>{
    try {
        // This line uses the `findByIdAndUpdate` method of the `resourceModel` to update a document by its ID.
        // The `await` keyword is used to wait for the query to complete before moving on to the next line of code.
        const resource = await resourceModel.findByIdAndUpdate(id, data);
        
        // This line returns the updated resource.
        return resource;
    } catch(error){
        // If there is an error, this line logs the error to the console.
        console.error(error);
        
        // This line returns null.
        return null;
    }
}
// This function removes a resource from the database by its ID and returns the removed resource.
// If there is an error, it logs the error and returns null.
const remove = async(id) =>{
    try {
        // This line uses the `findByIdAndDelete` method of the `resourceModel` to delete a document by its ID.
        // The `await` keyword is used to wait for the query to complete before moving on to the next line of code.
        const resource = await resourceModel.findByIdAndDelete(id);
        
        // This line returns the removed resource.
        return resource;
    } catch(error){
        // If there is an error, this line logs the error to the console.
        console.error(error);
        
        // This line returns null.
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