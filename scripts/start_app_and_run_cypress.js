const { spawn, spawnSync } = require('child_process')
const { stderr, stdout, stdin, exit } = require('process')

const startApp = () =>
  new Promise((resolve) => {
    const appProcess = spawn('yarn', ['start'], {
      stdio: [stdin, 'pipe', stderr],
    })

    appProcess.stdout.pipe(stdout)

    appProcess.stdout.on('data', (data) => {
      const appIsStarted = data.toString().includes('ready - started server')
      if (appIsStarted) {
        resolve(true)
      }
    })

    appProcess.on('close', () => resolve(false))
  })

const runCypress = () =>
  spawnSync('yarn', ['cypress:headless'], { stdio: 'inherit' })

;(async () => {
  console.log('Starting app...')

  const appIsStarted = await startApp()

  if (!appIsStarted) {
    console.error('Unable to start app. Exit')
    exit(1)
  }

  console.info('App is started! Launching Cypress...')

  runCypress()

  exit(0)
})()
