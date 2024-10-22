import assert from 'node:assert'
import { after, describe, it } from 'node:test'

import mssqlMultiPool from '@cityssm/mssql-multi-pool'

import { getObjects, getObjectsByType, getTables, getViews } from '../index.js'

import { config } from './test.config.js'

await describe('mssql-system-catalog', async () => {
  after(() => {
    void mssqlMultiPool.releaseAll()
  })

  await describe('objects', async () => {
    await it('Returns all objects', async () => {
      const objects = await getObjects(await mssqlMultiPool.connect(config))

      assert(objects.length > 0)
    })

    await it('Returns all "SYSTEM_TABLE" objects', async () => {
      const objects = await getObjectsByType(
        await mssqlMultiPool.connect(config),
        'SYSTEM_TABLE'
      )

      assert(objects.length > 0)
    })

    await it('Returns all tables with columns included', async () => {
      const objects = await getTables(
        await mssqlMultiPool.connect(config)
      )

      assert(objects.length > 0)
      assert(objects[0].columns.length > 0)
    })

    await it('Returns all views with columns included', async () => {
      const objects = await getViews(
        await mssqlMultiPool.connect(config)
      )

      assert(objects.length > 0)
      assert(objects[0].columns.length > 0)
    })
  })
})
