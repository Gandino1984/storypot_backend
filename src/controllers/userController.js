// This code imports the userModel module from the "../models/userModel.js" file.
// The userModel module contains the schema and functions related to user data in the application.
// The imported userModel module can now be used in this file to interact with the user data.
// For example, it can be used to create new user documents, update existing user documents, or 
// retrieve user data from the database.

import userModel from "../models/userModel.js";


/**
 * Retrieves all users from the database.
 * @returns {Promise<Array>} An array of user objects.
 */
const getAll = async () => {
    try {
        // Find all users in the database
        const users = await userModel.find();
        return users;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return an empty array if there's an error
        return [];
    }
}


/**
 * Retrieves a user from the database by their ID.
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<Object|null>} The user object if found, or null if not found.
 */
const getById = async (id) => {
    try {
        // Find the user in the database by their ID
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return null if there's an error
        return null;
    }
}


/**
 * Creates a new user in the database.
 * @param {Object} data - The data for the new user.
 * @returns {Promise<Object|null>} The created user object if successful, or null if there was an error.
 */
const create = async (data) => {
    try {
        // Create a new user in the database using the provided data
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return null if there was an error
        return null;
    }
}


/**
 * Updates a user in the database by their ID.
 * @param {string} id - The ID of the user to update.
 * @param {Object} data - The data to update the user with.
 * @returns {Promise<Object|null>} The updated user object if successful, or null if there was an error.
 */
const update = async (id, data) => {
    try {
        // Find the user in the database by their ID
        const user = await userModel.findById(id);
        // If the user is found, update their data and save the changes
        if (user) {
            Object.assign(user, data);
            await user.save();
            return user;
        }
        // If the user is not found, return null
        return null;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return null if there was an error
        return null;
    }
}

/**
 * Removes a user from the database by their ID.
 * @param {string} id - The ID of the user to remove.
 * @returns {Promise<Object|null>} The removed user object if successful, or null if there was an error.
 */
const remove = async (id) => {
    try {
        // Find the user in the database by their ID and delete them
        const user = await userModel.findByIdAndDelete(id);
        return user;
    } catch (error) {
        // Log any errors that occur
        console.error(error);
        // Return null if there was an error
        return null;
    }
}

/**
 * Exported functions for interacting with the user database.
 */
export const functions = {
    /**
     * Retrieves all users from the database.
     * @returns {Promise<Array>} An array of user objects.
     */
    getAll,

    /**
     * Retrieves a user from the database by their ID.
     * @param {string} id - The ID of the user to retrieve.
     * @returns {Promise<Object|null>} The user object if found, or null if not found.
     */
    getById,

    /**
     * Creates a new user in the database.
     * @param {Object} data - The data for the new user.
     * @returns {Promise<Object|null>} The created user object if successful, or null if there was an error.
     */
    create,

    /**
     * Updates a user in the database by their ID.
     * @param {string} id - The ID of the user to update.
     * @param {Object} data - The data to update the user with.
     * @returns {Promise<Object|null>} The updated user object if successful, or null if there was an error.
     */
    update,

    /**
     * Removes a user from the database by their ID.
     * @param {string} id - The ID of the user to remove.
     * @returns {Promise<Object|null>} The removed user object if successful, or null if there was an error.
     */
    remove
}


export default functions;