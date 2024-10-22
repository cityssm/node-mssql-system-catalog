import type { ConnectionPool, IRecordSet } from 'mssql';
import type { SysColumnsRecord } from './types.js';
export declare const columnsViewName = "sys.columns";
export declare const columnsSelectedColumnNames: ("name" | "object_id" | "column_id" | "user_type_id" | "max_length" | "precision" | "scale" | "is_nullable" | "is_identity")[];
export declare const columnsJoinedColumnNames: "user_type_name"[];
/**
 * Returns a list of column definition records for a given object.
 * @param pool - A mssql connection pool.
 * @param objectId - An object id for a table or view.
 * @returns An array of column definition records.
 */
export declare function getColumnsByObjectId(pool: ConnectionPool, objectId: number): Promise<IRecordSet<SysColumnsRecord>>;
export type { SysColumnsRecord } from './types.js';
