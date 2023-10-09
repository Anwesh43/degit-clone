import { Command } from "../typing"


const parseAndReplaceString = (strInput : string, ...args) : string => {
    let newStr = ''
    let index : number = 0 //args[index]
    let prevIndex : number = -1 
    let currIndex : number = strInput.indexOf("{}", prevIndex)
    while (currIndex != -1) {
        newStr = `${newStr}${strInput.substring(prevIndex + 1, currIndex)}${args[index]}`
        index++
        prevIndex = currIndex + 1
        currIndex = strInput.indexOf("{}", prevIndex)
    }
    return `${newStr}${strInput.substring(prevIndex + 1, strInput.length)}` 
}

export const formatCommand = (command : Command, ...args) : Command => {
    let newCommand : Command = {...command}
    newCommand.message = parseAndReplaceString(command.message, ...args)
    newCommand.linuxCommand = parseAndReplaceString(command.linuxCommand, ...args)
    return newCommand
}