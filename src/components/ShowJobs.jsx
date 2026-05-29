import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/api";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

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

            <div className="flex gap-10 flex-wrap justify-center align-center m-5">

                {jobs.map((job) => (
                    <div className="flex flex-col border-3 border-blue-500 rounded-xl gap-5 w-100 p-5 ">
                        <h1 className="text-2xl text-orange-700">{job.title}</h1>
                        <p>Exp : {job.experience}</p>

                        <div className="flex flex-col gap-3">
                            <h2>Company Name :{job.companyName}</h2>
                            <h3>Job Location : {job.location}</h3>
                            <h3>Salary : {job.salary}</h3>
                            <h3>Job Type : {job.jobType}</h3>

                            {/* <p>{job.description}</p> */}

                            <dl>
                                <dt>Job Description: </dt>
                                <dd>{job.description}</dd>
                            </dl>

                            <div className="flex gap-2 flex-wrap">
                                {job.skills.map((skill) => (
                                    <p>{skill},</p>
                                ))}

                            </div>
                        </div>

                        <div className="flex gap-10 w-90 justify-between">
                            <button type="button" className="border border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 cursor-pointer rounded" onClick={() => navigate(`/edit-job/${job._id}`)}>
                                Edit Job
                            </button>
                            <button type="button" className="border p-2 cursor-pointer">Delete Job</button>
                        </div>

                    </div>
                ))}


            </div>

        </div>

    );

};

export default Jobs;