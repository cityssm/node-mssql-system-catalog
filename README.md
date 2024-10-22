# node-mssql-system-catalog

[![npm](https://img.shields.io/npm/v/@cityssm/mssql-system-catalog)](https://www.npmjs.com/package/@cityssm/mssql-system-catalog)
[![Maintainability](https://api.codeclimate.com/v1/badges/87c0f574e2bc4beba308/maintainability)](https://codeclimate.com/github/cityssm/node-mssql-system-catalog/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-mssql-system-catalog/graph/badge.svg?token=2M7ZT46436)](https://codecov.io/gh/cityssm/node-mssql-system-catalog)
[![Coverage Testing](https://github.com/cityssm/node-mssql-system-catalog/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/node-mssql-system-catalog/actions/workflows/coverage.yml)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-mssql-system-catalog.svg/?label=active+issues&show_trend=true&token=3dMWtulF90OFrj0SU2Yla6MX)](https://app.deepsource.com/gh/cityssm/node-mssql-system-catalog/)

Helper functions to query a SQL Server database's system catalog.

- Uses a `ConnectionPool` object from the [node-mssql](https://www.npmjs.com/package/mssql) package,
  or from the [@cityssm/mssql-multi-pool](https://www.npmjs.com/package/@cityssm/mssql-multi-pool) package.
- TypeScript-friendly responses.

## Installation

```sh
npm install @cityssm/mssql-system-catalog
```

## Usage

```javascript
import { getTables } from '@cityssm/mssql-system-catalog'
import mssql from 'mssql'

const pool = await mssql.connect({
  /* mssql config settings */
})

const databaseTables = await getTables(pool)

const databaseViews = await getViews(pool)
```

## Related Projects

[@cityssm/mssql-multi-pool](https://www.npmjs.com/package/@cityssm/mssql-multi-pool)<br />
A simple way to manage connections to multiple SQL Server databases using the Node.js Tedious package ([node-mssql](https://www.npmjs.com/package/mssql)).
