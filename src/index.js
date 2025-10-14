/**
 * express-catchify
 * A simple async wrapper for Express routes to handle errors cleanly.
 */

export default function catchify(fn) {
      return function (req, res, next) {
            Promise.resolve(fn(req, res, next)).catch(next);
      };
}