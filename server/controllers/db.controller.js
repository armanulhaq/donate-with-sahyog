import supabase from "../db/connectDB.js";

const getAllProjects = async (req, res) => {
    try {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export { getAllProjects };
