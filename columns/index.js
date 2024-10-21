import { typesViewName } from '../types/index.js';
export const columnsViewName = 'sys.columns';
export const columnsSelectedColumnNames = [
    'object_id',
    'name',
    'column_id',
    'user_type_id',
    'max_length',
    'precision',
    'scale',
    'is_nullable',
    'is_identity'
];
export const columnsJoinedColumnNames = ['user_type_name'];
const selectedColumnNamesString = `c.${columnsSelectedColumnNames.join(', c.')},
  t.name as user_type_name`;
/**
 * Returns a list of column definition records for a given object.
 * @param pool - A mssql connection pool.
 * @param objectId - An object id for a table or view.
 * @returns An array of column definition records.
 */
export async function getColumnsByObjectId(pool, objectId) {
    const result = (await pool
        .request()
        .input('object_id', objectId)
        .query(`select ${selectedColumnNamesString}
        from ${columnsViewName} c
        left join ${typesViewName} t on c.user_type_id = t.user_type_id
        where c.object_id = @object_id
        order by c.column_id`));
    return result.recordset;
}
