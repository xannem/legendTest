const fs = require("fs");

const WEBSITE_DIRECTORY = "https://legend.finos.org/";
const DOC_DIRECTORY = "website/static/resource/studio/documentation/";

var files = fs.readdirSync(DOC_DIRECTORY);

for (let i = 0; i < files.length; i++) {
  if (!files[i].endsWith(".json")) continue;
  var jsonObject = JSON.parse(
    fs.readFileSync(DOC_DIRECTORY + files[i], "utf8")
  );

  const keys = Object.keys(jsonObject.entries);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (jsonObject.entries[key].url == undefined) {
      continue;
    }
    lookForUrl(jsonObject.entries[key].url);
  }
}

async function lookForUrlWithAnchor(url) {
  const locationOfFile = url
    .substring(0, url.lastIndexOf("/"))
    .replace(WEBSITE_DIRECTORY, "");

  const filePathName =
    "./website/build/" +
    locationOfFile +
    url.substring(url.lastIndexOf("/"), url.lastIndexOf("#")) +
    ".html";

  const anchorTag = url.substring(url.lastIndexOf("#"));

  if (await fs.existsSync(filePathName)) {
    await fs.readFile(filePathName, "UTF-8", (err, data) => {
      if (!data) {
        throw new Error("Broken link found " + filePathName);
      }
      if (!data.toLocaleLowerCase().includes(anchorTag)) {
        throw new Error("Broken link found " + url);
      }
    });
  } else {
    throw new Error("Broken link found " + url);
  }
}

async function lookForUrl(url) {
  currUrl = url.replace(WEBSITE_DIRECTORY, "");

  lastDirectoryIndex = currUrl.lastIndexOf("/");

  fileName = currUrl.substring(lastDirectoryIndex);
  currUrlFinal = currUrl.substring(0, lastDirectoryIndex);

  if (fs.existsSync("./website/build/" + currUrlFinal)) {
    if (fileName.lastIndexOf("#") !== -1) {
      //includes markdown tag
      lookForUrlWithAnchor(url);
    } else {
      if (!fs.existsSync(currUrlFinal + fileName + ".md")) {
        throw new Error("Broken link found " + url);
      }
    }
  } else {
    throw new Error("Broken link found " + url);
  }
  return;
}
