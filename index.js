import { readFileSync, unlinkSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// © VOID Abiner - MOZAMBIQUE Visit my LinkedIn: https://www.linkedin.com/in/abiner-maleiane-junior-36027b207

// Temporary data storage
let temporaryData = {};

/**
 * Function to create a temporary JSON file.
 * @param {string} jsonName - The name of the JSON file.
 * @param {object} data - The data to be stored in the JSON file.
 */
export function createTempJSON(jsonName, data) {
  const filePath = join(dirname(fileURLToPath(import.meta.url)), jsonName);
  if (existsSync(filePath)) {
    unlinkSync(filePath);
  }
  const jsonData = JSON.stringify(data, null, 2);
  try {
    writeFileSync(filePath, jsonData, 'utf8');
    console.log('JSON file created and written successfully:', filePath);
  } catch (err) {
    console.error('Error creating and writing to JSON file:', err);
  }
}

/**
 * Function to copy data from a temporary JSON file and delete the file.
 * @param {string} jsonName - The name of the JSON file.
 * @returns {object|null} - The data copied from the JSON file, or null if an error occurs.
 */
export function copyFromTempAndDeleteJSON(jsonName) {
  const filePath = join(dirname(fileURLToPath(import.meta.url)), jsonName);
  try {
    const data = readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    // Storing temporary data in memory
    temporaryData[jsonName] = jsonData;

    // Deleting the temporary JSON file
    unlinkSync(filePath);

    // Returning the copied data
    return temporaryData[jsonName];
  } catch (err) {
    console.error('Error copying content from temporary JSON:', err);
    return null;
  }
}

/**
 * Function to store temporary data and retrieve it.
 * @param {string} fileName - The name of the JSON file.
 * @param {object} data - The data to be stored temporarily.
 * @returns {object|null} - The temporary data retrieved, or null if an error occurs.
 */
export function retrieveTemporaryData(fileName, data) {
  createTempJSON(fileName, data);
  return copyFromTempAndDeleteJSON(fileName);
}

// Exporting the functions
export { createTempJSON, copyFromTempAndDeleteJSON, retrieveTemporaryData };

// Example usage




