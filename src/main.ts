import { DEGIT_COMMANDS } from "./contants/commandConstants"
import { Command } from "./typing"
import { formatCommand } from "./utils/formatUtils"
import { commandExecutionPromise } from "./utils/promiseUtil"



const args : string[] = process.argv 

const mainProcess = async (url : string, folderName : string) => {
    const cloneCommand : Command = formatCommand(DEGIT_COMMANDS.GIT_CLONE, url)
    //const folderCreationCommand : Command = formatCommand(DEGIT_COMMANDS.CREATE_FOLDER, folderName)
    console.log(`${cloneCommand.message}`)
    await commandExecutionPromise(cloneCommand.linuxCommand)
    const moveContentCommand : Command = formatCommand(DEGIT_COMMANDS.MOVE_CONTENT, url.split("/").pop(), folderName)
    console.log(moveContentCommand.message)
    await commandExecutionPromise(moveContentCommand.linuxCommand)
    console.log(`cloned from repo ${url} to ${folderName}`)

    process.chdir(`${process.cwd()}/${folderName}`)
    const installCommand = formatCommand(DEGIT_COMMANDS.INSTALL_LIBRARIES)
    console.log(installCommand.message)
    await commandExecutionPromise(installCommand.linuxCommand)
    console.log("finished setting up your project")
    const openEditorCommand : Command = DEGIT_COMMANDS.OPEN_EDITOR
    console.log(openEditorCommand.message)
    await commandExecutionPromise(openEditorCommand.linuxCommand)
}   

if (args.length === 4) {
    const [url, folderName] = args.splice(2, 2)
    mainProcess(url, folderName)
} else {
    console.log("Enter url and folder name")
    console.log(process.cwd())
}


