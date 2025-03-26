import * as core from '@actions/core'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const pipeline: string = core.getInput('pipeline')
    const path: string = core.getInput('path')
    const versionName: string = core.getInput('versionName')
    const versionDescription: string = core.getInput('versionDescription')

    validateInputs(pipeline)
    core.info(
      `Running pipeline at path: ${path}, with version name: ${versionName}, version description: ${versionDescription}`
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

function validateInputs(pipeline: string): void {
  if (!pipeline) {
    throw new Error("Input 'pipeline' is required")
  }
}
