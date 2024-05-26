import projectModel from "../models/projectModel.js";


/**
 * Retrieves all projects from the database.
 *
 * @return {Promise<Array>} An array of project objects.
 * @throws {Error} If there is an error retrieving the projects.
 */
const getAll = async () => {
    try {
        // Retrieve all projects from the database
        const projects = await projectModel.find();

        // Return the projects
        return projects;
    } catch (error) {
        // Log the error and return an empty array
        console.error(error);
        return [];
    }
};


/**
 * Retrieves a project from the database by its ID.
 *
 * @param {string} id - The ID of the project to retrieve.
 * @return {Promise<Object|null>} The project object if found, or null if not found.
 * @throws {Error} If there is an error retrieving the project.
 */
const getById = async (id) => {
    try {
        // Retrieve the project from the database by its ID
        const project = await projectModel.findById(id);

        // Return the project
        return project;
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};


/**
 * Creates a new project in the database with the given data.
 *
 * @param {Object} data - The data to create the project with.
 * @return {Promise<Object|null>} The newly created project object if successful, or null if there was an error.
 * @throws {Error} If there is an error creating the project.
 */
const create = async (data) => {
    try {
        // Create a new project in the database with the given data
        const project = await projectModel.create(data);
        // Return the newly created project
        return project;
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};


/**
 * Updates a project in the database with the given data.
 *
 * @param {string} id - The ID of the project to update.
 * @param {Object} data - The data to update the project with.
 * @return {Promise<Object|null>} The updated project object if successful, or null if there was an error.
 * @throws {Error} If there is an error updating the project.
 */
const update = async (id, data) => {
    try {
        // Update the project in the database with the given ID and data
        const project = await projectModel.findByIdAndUpdate(id, data);

        // Return the updated project
        return project;
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};


/**
 * Deletes a project from the database by its ID.
 *
 * @param {string} id - The ID of the project to delete.
 * @return {Promise<Object|null>} The deleted project object if successful, or null if there was an error.
 * @throws {Error} If there is an error deleting the project.
 */
const remove = async (id) => {
    try {
        // Delete the project from the database by its ID
        const project = await projectModel.findByIdAndDelete(id);

        // Return the deleted project
        return project;
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};


/**
 * Adds a user to a project in the database.
 *
 * @param {string} projectId - The ID of the project to add the user to.
 * @param {string} userId - The ID of the user to add to the project.
 * @return {Promise<Object|null>} The updated project object if successful, or null if there was an error.
 * @throws {Error} If there is an error adding the user to the project.
 */
const addUser = async (projectId, userId) => {
    try {
        // Retrieve the project from the database by its ID
        const project = await getById(projectId);

        // Check if the user is already in the project
        if (!project.fkUsers.includes(userId)) {
            // Add the user to the project's list of users
            project.fkUsers.push(userId);

            // Save the updated project to the database
            await project.save();

            // Return the updated project
            return project;
        }
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};


const getByProperty = async (property, value) => {
    try {
        // Find the user in the database by their property
        const user = await projectModel.findOne({ [property]: value });
        return user;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return null if there's an error
        return null;
    }
}


/**
 * Removes a user from a project in the database.
 *
 * @param {string} projectId - The ID of the project to remove the user from.
 * @param {string} userId - The ID of the user to remove from the project.
 * @return {Promise<Object|null>} The updated project object if successful, or null if there was an error.
 * @throws {Error} If there is an error removing the user from the project.
 */
const removeUser = async (projectId, userId) => {
    try {
        // Retrieve the project from the database by its ID
        const project = await getById(projectId);

        // Check if the user is in the project
        if (project.fkUsers.includes(userId)) {
            // Remove the user from the project's list of users
            project.fkUsers = project.fkUsers.filter(u => u !== userId);

            // Save the updated project to the database
            await project.save();

            // Return the updated project
            return project;
        }
    } catch (error) {
        // Log the error and return null
        console.error(error);
        return null;
    }
};

// Export the functions as a named object
const functions = {
    getAll,
    getById,
    create,
    update,
    remove,
    addUser,
    removeUser,
    getByProperty
};

export default functions;