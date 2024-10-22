import type { ConnectionPool, IRecordSet } from 'mssql';
import type { SysObjectsKnownTypeColumns, SysObjectsRecord, SysObjectsRecordWithColumns } from './types.js';
export declare const objectsViewName = "sys.objects";
export declare const objectsSelectedColumnNames: ("name" | "object_id" | "type" | "type_desc" | "schema_id" | "create_date" | "modify_date")[];
export declare const objectsJoinedColumnNames: "schema_name"[];
/**
 * Returns a list of object records.
 * @param pool - A mssql connection pool.
 * @returns An array of object records.
 */
export declare function getObjects(pool: ConnectionPool): Promise<IRecordSet<SysObjectsRecord>>;
/**
 * Returns a list of object records filtered by a given object type.
 * @param pool - A mssql connection pool.
 * @param objectType - An object type or type description.
 * @returns An array of object records filtered by a given object type.
 */
export declare function getObjectsByType(pool: ConnectionPool, objectType: SysObjectsRecord['type'] | SysObjectsKnownTypeColumns['type_desc']): Promise<IRecordSet<SysObjectsRecord>>;
/**
 * Returns a list of view-type object records.
 * @param pool - A mssql connection pool.
 * @returns An array of view-type object records.
 */
export declare function getViews(pool: ConnectionPool): Promise<IRecordSet<SysObjectsRecordWithColumns>>;
/**
 * Returns a list of table-type object records.
 * @param pool - A mssql connection pool.
 * @returns An array of table-type object records.
 */
export declare function getTables(pool: ConnectionPool): Promise<IRecordSet<SysObjectsRecordWithColumns>>;
export type { SysObjectsRecord, SysObjectsRecordWithColumns } from './types.js';
