# VSCode for node

## Description
This installs a private install of VSCode to an 'isolated directory' and allows you to run it, without interacting with your globally installed vscode.

The 'isolated directory' is a generated folder which defaults to `${tmp}/.vscode-test/${id}`  
where `${tmp}` is the system temp directory,  
and `${id}` is a hash based on the the current directory. 

You can override `id` by passing `--id=<id>` as an argument.

## Install

Simple: install the package
``` powershell
npm install -g @perpetual-motion/vscode
```

## Usage

### Run VSCode:

You can install and run vscode with a single command:

``` powershell
vscode [--id=<string>] [--verbose] [...vscode arguments...]
```

##### Switches
| switch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | description                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `--verbose`                                      | Prints verbose output of what the command is doing                                               |
| `--id=<text>`                                    | The id of the vscode instance to run. If not specified, a hash of the current directory is used. |



### Install VSCode:

Installs a isolated vscode installation:

``` powershell
vscode install [--verbose] [--id=<string>]
```

##### Switches
| switch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | description                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `--verbose`                                      | Prints verbose output of what the command is doing                                                   |
| `--id=<text>`                                    | The id of the vscode instance to install. If not specified, a hash of the current directory is used. |


### Uninstall VSCode:

Uninstalls isolated vscode installations:

``` powershell
vscode uninstall [--all] [--verbose] [--id=<string>]
```

##### Switches
| switch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | description                                                                                            |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `--verbose`                                      | Prints verbose output of what the command is doing                                                     |
| `--id=<text>`                                    | The id of the vscode instance to uninstall. If not specified, a hash of the current directory is used. |
| `--all`                                          | Uninstalls all the vscode temporary directories for all ids.                                           |


### Add an extension to the VSCode instance:

You can install an extension from the command line with `vscode add` and pass
either the extension id or the path to the vsix to install

``` powershell
vscode add <extension id> [version] [--verbose] [--id=<string>]
vscode add <path to .vsix> [--verbose] [--id=<string>]
```


##### Switches
| switch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | description                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                                                                                  | Prints verbose output of what the command is doing                                                                |
| `--id=<text>`                                                                                                | The id of the vscode instance to add the extension to. If not specified, a hash of the current directory is used. |
| `--pre-release`                                                                                              | Allows pre-release versions of the extension to be installed.                                                     |

### Get information for VSCode instances:

Shows the information about vscode instances:

``` powershell
vscode info [--all] [--verbose] [--id=<string>]
```
##### Switches
| switch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | description                                                                                                      |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `--verbose`                                      | Prints verbose output of what the command is doing                                                               |
| `--id=<text>`                                    | The id of the vscode instance to get information for. If not specified, a hash of the current directory is used. |
| `--all`                                          | Gets all the vscode instances for all ids.                                                                       |
