import { supabase } from "./supabase";
export { deleteData as Delete, insert as Insert, select as Select, update as Update };

export async function select(
  table: string,
  columns = "*"
) {
  const { data, error } = await supabase
    .from(table)
    .select(columns);

  if (error) throw error;

  return data;
}

export async function insert(
  table: string,
  values: object
) {
  const { data, error } = await supabase
    .from(table)
    .insert(values)

  if (error) throw error;
}

export async function update(
  table: string,
  values: object,
  where: object
) {
  const { data, error } = await supabase
    .from(table)
    .update(values)
    .match(where)

  if (error) throw error;

  return data;
}

export async function deleteData(
  table: string,
  where: object
) {
  const { data, error } = await supabase
    .from(table)
    .delete()
    .match(where)

  if (error) throw error;

  return data;
}