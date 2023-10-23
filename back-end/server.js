import express from 'express';
const app = express();
const port = process.env.PORT || 3001;

import { spawn } from 'child_process';

app.use(express.json());


// Define a GET route that returns a version number
app.get('/version', (req, res) => {
    const version = '0.0.1';
    res.send(`API Version: ${version}`);
});


app.post('/api/question', (req, res) => {
  const { arguments: scriptArguments } = req.body;

  const indexProcess = spawn('node', ['index.js', req.body]);

  let result = '';

  indexProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  indexProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  indexProcess.on('close', (code) => {
    if (code === 0) {
      res.json({ result });
    } else {
      res.status(500).json({ error: 'Script execution failed' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
