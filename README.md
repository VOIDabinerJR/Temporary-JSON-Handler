
# Temporary JSON Handler

A library to handle temporary JSON data storage and retrieval.

## Installation

```bash
npm install temporary-json-handler
```
or
```bash
npm install https://github.com/VOIDabinerJR/temporary-json-handler.git

```
# Usage

```bash
import { createTempJSON, copyFromTempAndDeleteJSON, retrieveTemporaryData } from 'temporary-json-handler';

// Example usage
const exampleData = {
  name: "example"
};

const retrievedData = retrieveTemporaryData('tempFile.json', exampleData);
console.log('Retrieved data:', retrievedData);
```
or component1.js
```bash
import { createTempJSON } from './tempJsonHandler';

// Data to be temporarily stored
const dataToStore = {
  name: 'John Doe',
  email: 'john@example.com'
};

// Create temporary JSON file with the data
createTempJSON('tempData.json', dataToStore);

console.log('Temporary JSON file created with data:', dataToStore);
```
component2.js
```bash
import { copyFromTempAndDeleteJSON } from './tempJsonHandler';

// Temporary JSON file name to be copied
const tempFileName = 'tempData.json';

// Copy data from temporary JSON file
const copiedData = copyFromTempAndDeleteJSON(tempFileName);

console.log('Copied data from temporary JSON file:', copiedData);

```
In component1.js, data is created and temporarily stored in a JSON file using the createTempJSON function.
In component2.js, data is copied from the temporary JSON file, and then the file is deleted using the copyFromTempAndDeleteJSON function.
The createTempJSON and copyFromTempAndDeleteJSON functions are defined in the tempJsonHandler.js file, which is imported by components 1 and 2 to perform the data creation and copying operations.

