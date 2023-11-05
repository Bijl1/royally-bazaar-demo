const { expressjwt: jwt } = require("express-jwt");

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload",
  getToken: getTokenFromHeaders,
}).unless({ path: ['/auth/login', '/auth/signup'] }); // Add unless for login and signup routes

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    console.log('Received Token:', token);

    try {
      const decoded = jwt.decode(token, { complete: true });
      console.log('Decoded Token:', decoded);
    } catch (error) {
      console.error('Error decoding token:', error);
    }

    return token;
  }

  return null;
}

module.exports = {
  isAuthenticated,
};
