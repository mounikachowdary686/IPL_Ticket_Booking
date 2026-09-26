import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzteuflsldbwkqqfnlxd.supabase.co";
const supabaseKey = "sb_publishable_6zHwCo3sUn0WAVvMMknWQA_9jqo9wkM";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
