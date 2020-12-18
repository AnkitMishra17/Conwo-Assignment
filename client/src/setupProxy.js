const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/add",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    "/maps/api/distancematrix/",
    createProxyMiddleware({
      target: "https://maps.googleapis.com",
      changeOrigin: true,
    })
  );
};
