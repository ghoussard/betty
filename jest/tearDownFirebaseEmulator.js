const { clearAllCollections, deleteFirebaseApp } = require('@/back/infrastructure')

afterAll(async () => {
  await clearAllCollections()
  await deleteFirebaseApp()
})
