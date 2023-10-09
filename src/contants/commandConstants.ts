import { Command } from "../typing";

export const DEGIT_COMMANDS : Record<string, Command> = {
    
    GIT_CLONE : {
        message: "cloning the repo {}",
        linuxCommand: "git clone {}"
    },
    MOVE_CONTENT: {
        message: "moving from folder {} {}",
        linuxCommand: "mv {} {}"
    },
    INSTALL_LIBRARIES: {
        message: "installing libraries",
        linuxCommand: "npm install"
    },
    OPEN_EDITOR: {
        message: "opening the code editor",
        linuxCommand: "code ."
    }
}