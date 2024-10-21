export interface SysColumnsRecord {
  object_id: number
  name: string
  column_id
  user_type_id: number
  user_type_name: string
  max_length: number
  precision: number
  scale: number
  is_nullable: boolean | null
  is_identity: boolean
}