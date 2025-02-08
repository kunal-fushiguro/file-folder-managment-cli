import { existsSync, rmSync, mkdirSync, renameSync, cpSync } from "fs";

async function removeFolder(path: string, filename: string) {
  try {
    const doesFolferExistorNot = existsSync(path);

    if (!doesFolferExistorNot) {
      console.error(`Error : Folder name ${filename} does not existed : (`);
      process.exit(1);
    } else {
      rmSync(path, { recursive: true, force: true });
      console.log(`File "${filename}" deleted.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function createFolder(path: string, filename: string) {
  try {
    const doesFolferExistorNot = existsSync(path);
    if (doesFolferExistorNot) {
      console.error(`Error : Folder name ${filename} already existed : (`);
      process.exit(1);
    } else {
      mkdirSync(path);
      console.log(`Folder "${filename}" created.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function moveFolder(
  currentPath: string,
  newPath: string,
  fileName: string
) {
  try {
    const doesFolferExistorNot = existsSync(currentPath);
    if (!doesFolferExistorNot) {
      console.error(`Error : Folder name ${currentPath} does not existed : (`);
      process.exit(1);
    } else {
      renameSync(currentPath, newPath + fileName);
      console.log(`Folder moved to new path "${newPath}".`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function copyFolder(currentPath: string, newPath: string) {
  try {
    const doesFolferExistorNot = existsSync(currentPath);
    if (!doesFolferExistorNot) {
      console.error(`Error : Folder name ${currentPath} does not existed : (`);
      process.exit(1);
    } else {
      cpSync(currentPath, newPath, { recursive: true });
      console.log(`Folder copy to new path "${newPath}".`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

export { removeFolder, createFolder, moveFolder, copyFolder };
