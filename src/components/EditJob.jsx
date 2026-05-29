import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        salary: ""
    });

    useEffect(() => {
        fetchJob();
    }, []);

    const fetchJob = async () => {
        const response = await axios.get(
            `http://localhost:5000/api/jobs`
        );

        const job = response.data.data.find(
            (item) => item._id === id
        );

        setFormData(job);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const updateJob = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                `http://localhost:5000/api/jobs/${id}`,
                formData
            );

            alert("Job Updated Successfully");

            navigate("/dashboard");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={updateJob}>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
            />

            <input
                name="location"
                value={formData.location}
                onChange={handleChange}
            />

            <input
                name="salary"
                value={formData.salary}
                onChange={handleChange}
            />

            <button type="submit">
                Update Job
            </button>
        </form>
    );
};

export default EditJob;