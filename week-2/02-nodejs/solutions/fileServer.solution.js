/**
 You need to create an express HTTP server in Node.js which will handle the logic of a file server.
- Use built in Node.js `fs` module
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
Example: GET http://localhost:3000/files
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
Testing the server - run `npm run test-fileServer` command in terminal
*/
const { dir } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req, res) => {
    const directoryPath = 'C:/Users/kulu1/assignments/week-2/02-nodejs/files/';// This ensures that the path is constructed correctly regardless of the operating system.
    console.log(directoryPath);
   
    fs.readdir( directoryPath, (err, files) => {
        
        

        if (files) {
            res.json({ files });
           
        } else {
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
    });
    // try {
    //     const files = fs.readdirSync(directoryPath);
    //     res.json({ files });
    // } catch (err) {
    //     console.error('Error reading directory:', err);
    //     res.status(500).json({ error: 'Failed to retrieve files', details: err.message });
    // }
});

app.get('/file/:filename', function (req, res) {
    const filepath = path.join('C:/Users/kulu1/assignments/week-2/02-nodejs/files/', req.params.filename);

    fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        return res.status(404).send('File not found');
    }
    res.send(data);
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.all('*', (req, res) => {
        res.status(404).send('Route not found');
     });


























































































































































// app.get('/files', function (req, res) {
//     fs.readdir(path.join(__dirname, './files/'), (err, files) => {
//     if (err) {
//         return res.status(500).json({ error: 'Failed to retrieve files' });
//     }
//     res.json(files);
//     });
// });

// app.get('/file/:filename', function (req, res) {
//     const filepath = path.join(__dirname, './files/', req.params.filename);

//     fs.readFile(filepath, 'utf8', (err, data) => {
//     if (err) {
//         return res.status(404).send('File not found');
//     }
//     res.send(data);
//     });
// });

// app.all('*', (req, res) => {
//     res.status(404).send('Route not found');
// });