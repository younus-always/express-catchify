# express-catchify

A simple async wrapper for Express routes to handle errors cleanly.  
Avoid repetitive `try-catch` blocks in your async route handlers.

## Features

- Wraps async Express route handlers
- Automatically passes errors to Express error middleware
- Lightweight and dependency-free (except Express)

## Installation

```bash
npm install express-catchify
```