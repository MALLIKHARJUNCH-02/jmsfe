import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/api";


const tableTitles = ["Job Title", "Company Name", "Location", "Salary", "JobType", "Experience", "Description", "Skills"]
const jobObjectProperties = ["title", "companyName", "location", "salary", "jobType", "experience", "description", "skills"]
const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const getJobs = async () => {

            try {

                const response = await axios.get(`${BASE_URL}/jobs`);

                setJobs(response.data.data);

            } catch (err) {

                setError("Failed to fetch jobs");

            } finally {

                setLoading(false);

            }

        };

        getJobs();

    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (

        <div className="flex flex-col items-center">

            <h1 className="font-bold text-4xl text-blue-500">Job List</h1>



            <table className="m-5">
                <thead>
                    <tr>
                        {tableTitles.map((title, index) => (
                            <th className="border-3 border-blue-500 p-2" key={index}>{title}</th>
                        ))}
                    </tr>

                </thead>

                <tbody className="text-center">
                    {jobs.map((job) => (
                        <tr key={job._id}>
                            {jobObjectProperties.map((property, index) => (
                                <td key={index} className="border-2 border-green-500 p-5">
                                    {Array.isArray(job[property]) ? job[property].join(", ") : job[property]}
                                    {/* {job[property]} */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>

    );

};

export default Jobs;