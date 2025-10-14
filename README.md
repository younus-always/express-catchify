# express-catchify

A simple async wrapper for Express routes to handle errors cleanly.  
Avoid repetitive `try-catch` blocks in your async route handlers.

## Features

- Wraps async Express route handlers
- Automatically passes errors to Express error middleware
- Lightweight and dependency-free (except Express)

## Installation

Using npm:

```bash
npm install --save express-catchify
```

Using yarn:

```bash
yarn add express-catchify
```

## Usage

With _express-catchify_

```bash
import express from 'express';
import catchify from 'express-catchify';

const app = express();

app.get('/', catchify(async (req, res) => {
    const data = await fetchData(); // async operation
    res.send(data);
}));

// Global error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

Without _express-catchify_

```bash
import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    fetchData()
        .then(data => res.send(data))
        .catch(next); // error passed to global error handler
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## Why use express-catchify?

- Eliminates repetitive try-catch blocks.
- Works with any async route in Express.
- Makes your routes cleaner and easier to read.
