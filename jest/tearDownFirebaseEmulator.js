const { clearFirestore, closeApp } = require('@/back/infrastructure')

afterAll(async () => {
  await clearFirestore()
  await closeApp()
})
