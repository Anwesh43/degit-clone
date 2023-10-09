import {exec, ExecException} from 'child_process'

export const commandExecutionPromise = async (command : string) : Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(command, (error : ExecException, stdout : string, stderr : string) => {
            if (error == null) {
                resolve(stdout || stderr)
            } else {
                reject(error)
            }
        })
    })
}