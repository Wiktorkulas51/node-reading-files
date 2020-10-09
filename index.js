const fs = require("fs");
const path = require("path");

// fs.stat(path.join(__dirname, "files", "lorem1.txt"), (err, stats) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
//   console.log(`data utworzenia ${stats.birthtime}`);
//   console.log(`data moodyfikacji ${stats.mtime}`);
//   console.log(`isFile: ${stats.isFile()}`);
//   console.log(`isDirecotry: ${stats.isDirectory()}`);
// });

fs.readdir(path.join(__dirname, "files"), (err, files) => {
  if (err) {
    console.log(err);
    throw err;
  }

  files.forEach((filename) => {
    fs.stat(path.join(__dirname, "files", filename), (err, stats) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(stats.size);

      console.log("informacja o pliku " + filename);
      console.log("data utworzenia " + stats.birthtime.getFullYear());
    });
  });
});
