// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const username = req.headers.username;

  try {
    if (username) {
      req.user = user;
      next();
    }
  } catch (error) {}
}

module.exports = adminMiddleware;
