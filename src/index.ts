#!/usr/bin/env node

import path from "path";
import {
  copyFolder,
  createFolder,
  moveFolder,
  removeFolder,
} from "./foldersActions";
import { copyfile, createfile, movefile, removefile } from "./fileActions";

const cmd = process.argv.slice(2);

// error if the cmd is more than 2
if (cmd.length > 3) {
  console.error("Usage : index.ts [-D | -F] [-r] <filename or foldername>");
  process.exit(1);
}

//  extract the actions from cmd
const action = cmd[0];
const isRemove = cmd.includes("-r");
const filePath = cmd[cmd.length - 1];
const targetFilePath = path.join(process.cwd(), filePath);
// move and copy
let currentPath;
let newPath;
let fileName;

// actions
async function main() {
  try {
    // folder create
    if (action === "-F") {
      if (isRemove) {
        await removeFolder(targetFilePath, filePath);
      } else {
        await createFolder(targetFilePath, filePath);
      }
      // file create
    } else if (action === "-D") {
      if (isRemove) {
        await removefile(targetFilePath, filePath);
      } else {
        await createfile(targetFilePath, filePath);
      }
      //  move folder
    } else if (action === "-MVF") {
      let splitFileName = cmd[1].split("/");
      fileName = splitFileName[splitFileName.length - 2];
      currentPath = path.join(process.cwd(), cmd[1]);
      newPath = path.join(process.cwd(), cmd[cmd.length - 1]);
      if (!currentPath && !newPath && !fileName) {
        console.error("Provide an valid path.");
        process.exit(1);
      }
      await moveFolder(currentPath, newPath, fileName);
      // move file
    } else if (action === "-MVD") {
      let splitFileName = cmd[1].split("/");
      fileName = splitFileName[splitFileName.length - 1];
      currentPath = path.join(process.cwd(), cmd[1]);
      newPath = path.join(process.cwd(), cmd[cmd.length - 1]);
      if (!currentPath && !newPath && !fileName) {
        console.error("Provide an valid path.");
        process.exit(1);
      }
      await movefile(currentPath, newPath, fileName);
      // copy folder
    } else if (action === "-CF") {
      currentPath = path.join(process.cwd(), cmd[1]);
      newPath = path.join(process.cwd(), cmd[cmd.length - 1]);
      if (!currentPath && !newPath) {
        console.error("Current Path and new path is required.");
        process.exit(1);
      }
      await copyFolder(currentPath, newPath);
      // copy file
    } else if (action == "-CD") {
      let splitFileName = cmd[1].split("/");
      fileName = splitFileName[splitFileName.length - 1];
      currentPath = path.join(process.cwd(), cmd[1]);
      newPath = path.join(process.cwd(), cmd[cmd.length - 1]);
      if (!currentPath && !newPath && !fileName) {
        console.error("Provide an valid path.");
        process.exit(1);
      }
      await copyfile(currentPath, newPath, fileName);
    } else if (action === "-H") {
      console.log(`
        📌 File & Folder Management CLI 📌
      
        Usage:
          mycli <command> <arguments>
      
        Commands:
          -D <file_name>          Create a file
          -D -r <file_name>       Delete a file
          -F <folder_name>        Create a folder
          -F -r <folder_name>     Delete a folder
          -MVF <old_path> <new_path>    Move a folder
          -MVD <old_path> <new_path>    Move a file
          -CF <source_folder> <destination_folder>    Copy a folder
          -CD <source_file> <destination_file>        Copy a file
      
        Examples:
          -D notes.txt         # Creates a file named notes.txt
          -D -r notes.txt      # Deletes the file notes.txt
          -F myFolder          # Creates a folder named myFolder
          -F -r myFolder       # Deletes the folder myFolder
          -MVF old_folder new_folder    # Moves old_folder to new_folder
          -MVD old_file.txt new_file.txt  # Moves old_file.txt to new_file.txt
          -CF folder1 folder2  # Copies folder1 to folder2
          -CD file1.txt file2.txt  # Copies file1.txt to file2.txt
      
        Run 'mycli -H' to see this help menu again.
      
        `);
    } else {
      console.error("Invalid action. Use -H for help.");
      process.exit(1);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

main();
