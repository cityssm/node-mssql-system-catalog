import { getColumnsByObjectId } from '../columns/index.js';
import { schemasViewName } from '../schemas/index.js';
export const objectsViewName = 'sys.objects';
export const objectsSelectedColumnNames = [
    'name',
    'object_id',
    'schema_id',
    'type',
    'type_desc',
    'create_date',
    'modify_date'
];
export const objectsJoinedColumnNames = ['schema_name'];
const selectedColumnNamesString = `o.${objectsSelectedColumnNames.join(', o.')},
  s.name as schema_name`;
/**
 * Returns a list of object records.
 * @param pool - A mssql connection pool.
 * @returns An array of object records.
 */
export async function getObjects(pool) {
    const result = (await pool.request()
        .query(`select ${selectedColumnNamesString}
      from ${objectsViewName} o
      left join ${schemasViewName} s on o.schema_id = s.schema_id`));
    return result.recordset;
}
/**
 * Returns a list of object records filtered by a given object type.
 * @param pool - A mssql connection pool.
 * @param objectType - An object type or type description.
 * @returns An array of object records filtered by a given object type.
 */
export async function getObjectsByType(pool, objectType) {
    const result = (await pool
        .request()
        .input('type', objectType)
        .query(`select ${selectedColumnNamesString}
        from ${objectsViewName} o
        left join ${schemasViewName} s on o.schema_id = s.schema_id
        where o.type = @type or o.type_desc = @type`));
    return result.recordset;
}
/**
 * Returns a list of view-type object records.
 * @param pool - A mssql connection pool.
 * @returns An array of view-type object records.
 */
export async function getViews(pool) {
    const views = (await getObjectsByType(pool, 'VIEW'));
    for (const view of views) {
        view.columns = await getColumnsByObjectId(pool, view.object_id);
    }
    return views;
}
/**
 * Returns a list of table-type object records.
 * @param pool - A mssql connection pool.
 * @returns An array of table-type object records.
 */
export async function getTables(pool) {
    const tables = (await getObjectsByType(pool, 'USER_TABLE'));
    for (const table of tables) {
        table.columns = await getColumnsByObjectId(pool, table.object_id);
    }
    return tables;
}
