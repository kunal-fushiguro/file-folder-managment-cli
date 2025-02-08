import { cpSync, existsSync, renameSync, rmSync, writeFileSync } from "fs";

async function removefile(path: string, filename: string) {
  try {
    const doesFileExistOrNot = existsSync(path);
    if (!doesFileExistOrNot) {
      console.error(`Error : file name ${filename} does not existed : (`);
      process.exit(1);
    } else {
      rmSync(path, { force: true });
      console.log(`File "${filename}" deleted.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function createfile(path: string, filename: string) {
  try {
    const doesFileExistOrNot = existsSync(path);
    if (doesFileExistOrNot) {
      console.error(`Error : file name ${filename} already existed : (`);
      process.exit(1);
    } else {
      writeFileSync(path, "");
      console.log(`file "${filename}" created.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function movefile(
  currentPath: string,
  newPath: string,
  fileName: string
) {
  try {
    const doesFolferExistorNot = existsSync(currentPath);
    if (!doesFolferExistorNot) {
      console.error(`Error : file name ${currentPath} does not existed : (`);
      process.exit(1);
    } else {
      renameSync(currentPath, newPath + fileName);
      console.log(`file moved to new path "${newPath}".`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

async function copyfile(
  currentPath: string,
  newPath: string,
  fileName: string
) {
  try {
    const doesFolferExistorNot = existsSync(currentPath);
    if (!doesFolferExistorNot) {
      console.error(`Error : file name ${currentPath} does not existed : (`);
      process.exit(1);
    } else {
      cpSync(currentPath, newPath + fileName);
      console.log(`file copy to new path "${newPath}".`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error : ", error.message);
      process.exit(1);
    }
  }
}

export { removefile, createfile, copyfile, movefile };
