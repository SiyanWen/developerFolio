const path = require("path");

module.exports = function (app) {
  app.get("/talk_to_pdf.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/talk_to_pdf.html"));
  });
  app.get("/shop_net.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/shop_net.html"));
  });
};
