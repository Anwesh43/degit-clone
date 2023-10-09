import { DEGIT_COMMANDS } from "../src/contants/commandConstants";
import { Command } from "../src/typing";
import { formatCommand } from "../src/utils/formatUtils";

const prevCommand : Command = DEGIT_COMMANDS.GIT_CLONE
console.log("previous command", {...prevCommand})
const newCommand : Command = formatCommand(DEGIT_COMMANDS.GIT_CLONE, "https://github.com/jsynowiec/node-typescript-boilerplate")
console.log("new command", {...newCommand})

console.log("new mv commnad", formatCommand(DEGIT_COMMANDS.MOVE_CONTENT, "node-typescript-boilerplate", "ts-boiler1111111"))