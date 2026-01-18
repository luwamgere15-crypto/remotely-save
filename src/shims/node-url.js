const url = require("../../node_modules/url/url.js");

// Copy all properties from the url module to exports
for (const key in url) {
  if (Object.prototype.hasOwnProperty.call(url, key)) {
    exports[key] = url[key];
  }
}

// Add the missing fileURLToPath function
exports.fileURLToPath = (urlStr) => {
  try {
    const u = new URL(urlStr);
    return u.pathname;
  } catch (e) {
    return urlStr;
  }
};
