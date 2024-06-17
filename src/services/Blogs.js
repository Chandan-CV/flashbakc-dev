import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from "./dbTables";

export const getBlogs = async () =>
  supabase.from(DB_TABLES.BLOGSTABLE).select("*");

export const fetchOneBlog = async (id) =>
  supabase.from(DB_TABLES.BLOGSTABLE).select().eq("id", id);
