# File & Folder Management CLI

## Description

This CLI tool provides a simple way to manage files and folders from the terminal. You can create, delete, move, and copy files and folders using various commands. The tool is written in Node.js and designed to be efficient and easy to use.

## Installation

1. Clone the repository or download the script.
2. Navigate to the project directory.
3. Install dependencies (if any):
   ```sh
   npm install
   ```
4. Make the script executable:
   ```sh
   chmod +x index.ts
   ```
5. Add the script to your PATH for global use or run it directly with Node.js.

## Usage

Run the following command structure:

```sh
node ./dist/index.ts <command> <arguments>
```

### Commands:

| Command                                    | Description       |
| ------------------------------------------ | ----------------- |
| `-D <file_name>`                           | Create a file     |
| `-D -r <file_name>`                        | Delete a file     |
| `-F <folder_name>`                         | Create a folder   |
| `-F -r <folder_name>`                      | Delete a folder   |
| `-MVF <old_path> <new_path>`               | Move a folder     |
| `-MVD <old_path> <new_path>`               | Move a file       |
| `-CF <source_folder> <destination_folder>` | Copy a folder     |
| `-CD <source_file> <destination_file>`     | Copy a file       |
| `-H`                                       | Display help menu |

### Examples

#### Creating and Deleting Files:

```sh
 -D notes.txt         # Creates a file named notes.txt
 -D -r notes.txt      # Deletes the file notes.txt
```

#### Creating and Deleting Folders:

```sh
 -F myFolder          # Creates a folder named myFolder
 -F -r myFolder       # Deletes the folder myFolder
```

#### Moving Files and Folders:

```sh
 -MVF old_folder new_folder    # Moves old_folder to new_folder
 -MVD old_file.txt new_file.txt  # Moves old_file.txt to new_file.txt
```

#### Copying Files and Folders:

```sh
 -CF folder1 folder2  # Copies folder1 to folder2
 -CD file1.txt file2.txt  # Copies file1.txt to file2.txt
```

#### Displaying Help Menu:

```sh
 -H  # Show help menu
```

## Error Handling

- If an invalid command is entered, an error message will be displayed.
- If required arguments are missing, an error message will prompt the user.

## License

This project is open-source and available for use and modification.

---

Happy coding! 🚀
