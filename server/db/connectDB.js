import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
    process.env.PROJECT_ID,
    process.env.SUPABASE_SECRET_KEY
);

export default supabase;
