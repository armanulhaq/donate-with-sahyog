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

const getProjectById = async (req, res) => {
    console.log(req.params.id);
    try {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("id", req.params.id);
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        console.log(data);
        return res.status(200).json(data[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export { getAllProjects, getProjectById };
