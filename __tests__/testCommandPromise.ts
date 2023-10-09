import { commandExecutionPromise } from "../src/utils/promiseUtil"

async function testCommandExecutorPromise() {
    console.log("Running a command to display contents of the folder")
    const result1 = await commandExecutionPromise("ls")
    console.log(result1)
    console.log("X-----------------------X-----------------------X-----------------------X")
    console.log("X-----------------------X-----------------------X-----------------------X")
    console.log("Running another command to see current working directory")
    const result2 = await commandExecutionPromise("pwd")
    console.log(result2)
}

testCommandExecutorPromise()