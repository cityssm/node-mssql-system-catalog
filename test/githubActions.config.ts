import type { mssqlTypes } from '@cityssm/mssql-multi-pool'

/*
 * SECRETS OK!
 * https://github.com/potatoqualitee/mssqlsuite
 */

export const config: mssqlTypes.config = {
  server: 'localhost',
  user: 'sa',
  // eslint-disable-next-line sonarjs/no-hardcoded-credentials
  password: 'dbatools.I0',
  database: 'TestDatabase',
  options: {
    encrypt: false
  }
}
