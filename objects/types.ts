import type { IRecordSet } from 'mssql'

import type { SysColumnsRecord } from '../columns/types.js'

export type SysObjectsKnownTypeColumns =
  | {
      type: 'AF'
      type_desc: 'AGGREGATE_FUNCTION'
    }
  | {
      type: 'C'
      type_desc: 'CHECK_CONSTRAINT'
    }
  | {
      type: 'D'
      type_desc: 'DEFAULT_CONSTRAINT'
    }
  | {
      type: 'F'
      type_desc: 'FOREIGN_KEY_CONSTRAINT'
    }
  | {
      type: 'FN'
      type_desc: 'SQL_SCALAR_FUNCTION'
    }
  | {
      type: 'FS'
      type_desc: 'CLR_SCALAR_FUNCTION'
    }
  | {
      type: 'FT'
      type_desc: 'CLR_TABLE_VALUED_FUNCTION'
    }
  | {
      type: 'IF'
      type_desc: 'SQL_INLINE_TABLE_VALUED_FUNCTION'
    }
  | {
      type: 'IT'
      type_desc: 'INTERNAL_TABLE'
    }
  | {
      type: 'P'
      type_desc: 'SQL_STORED_PROCEDURE'
    }
  | {
      type: 'PC'
      type_desc: 'CLR_STORED_PROCEDURE'
    }
  | {
      type: 'PG'
      type_desc: 'PLAN_GUIDE'
    }
  | {
      type: 'PK'
      type_desc: 'PRIMARY_KEY_CONSTRAINT'
    }
  | {
      type: 'R'
      type_desc: 'RULE'
    }
  | {
      type: 'RF'
      type_desc: 'REPLICATION_FILTER_PROCEDURE'
    }
  | {
      type: 'S'
      type_desc: 'SYSTEM_TABLE'
    }
  | {
      type: 'SN'
      type_desc: 'SYNONYM'
    }
  | {
      type: 'SO'
      type_desc: 'SEQUENCE_OBJECT'
    }
  | {
      type: 'U'
      type_desc: 'USER_TABLE'
    }
  | {
      type: 'V'
      type_desc: 'VIEW'
    }

interface SysObjectsUnknownTypeColumns {
  type: 'TA' | 'TR' | 'UQ' | 'EC' | 'SQ' | 'TF' | 'TT' | 'X' | 'ST' | 'ET'
  type_desc: string | null
}

export type SysObjectsTypeColumns =
  | SysObjectsKnownTypeColumns
  | SysObjectsUnknownTypeColumns

export type SysObjectsRecord = SysObjectsTypeColumns & {
  name: string
  object_id: number
  schema_id: number
  schema_name: string
  create_date: Date
  modify_date: Date
}

export type SysObjectsRecordWithColumns = SysObjectsRecord & {
  columns: IRecordSet<SysColumnsRecord>
}
