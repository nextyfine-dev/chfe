#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const packageJson = require("./package.json");

function changeFileExtensions(folderPath, currentExtension, newExtension) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      if (path.extname(filePath) === `.${currentExtension}`) {
        const newFilePath = path.join(
          folderPath,
          path.basename(file, `.${currentExtension}`) + `.${newExtension}`
        );

        fs.rename(filePath, newFilePath, (err) => {
          if (err) {
            console.error(`Error renaming file '${file}':`, err);
          } else {
            console.log(
              `** Renamed '${file}' to '${path.basename(newFilePath)}'`
            );
          }
        });
      }
    });
  });
}

function displayHelp() {
  console.log(
    "Usage: chfe -f <folder> -ce <current_extension> -ne <new_extension>"
  );
  console.log("Options:");
  console.log("  -v, --version                 Display the version");
  console.log("  -h, --help                    Display this help message");
  console.log("  -f, --folder <folder>         Specify the folder name");
  console.log("  -ce, --current-extension <current_extension>");
  console.log(
    "                                Specify the current file extension"
  );
  console.log("  -ne, --new-extension <new_extension>");
  console.log("                                Specify the new file extension");
}

const args = process.argv.slice(2);

if (args.includes("-h") || args.includes("--help")) {
  displayHelp();
  process.exit(0);
}

if (args.includes("-v") || args.includes("--version")) {
  console.log(`chfe v-${packageJson.version}`);
  process.exit(0);
}

const options = {
  folderPath: "",
  currentExtension: "",
  newExtension: "",
};

for (let i = 0; i < args.length; i += 2) {
  const option = args[i];
  const value = args[i + 1];

  switch (option) {
    case "-f":
    case "--folder":
      options.folderPath = value;
      break;
    case "-ce":
    case "--current-extension":
      options.currentExtension = value;
      break;
    case "-ne":
    case "--new-extension":
      options.newExtension = value;
      break;
    default:
      console.error("Invalid option:", option);
      displayHelp();
      process.exit(1);
  }
}

if (!options.folderPath || !options.currentExtension || !options.newExtension) {
  console.error("Missing required options.");
  displayHelp();
  process.exit(1);
}

changeFileExtensions(
  options.folderPath,
  options.currentExtension,
  options.newExtension
);
