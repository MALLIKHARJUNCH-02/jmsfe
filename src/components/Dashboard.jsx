import { useNavigate } from "react-router-dom";
import ShowJobs from './ShowJobs'
const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <section className="flex">
            <aside>
                <button type="button" onClick={() => navigate(`/jobs`)}>Show Jobs</button>
                <button type="button">Create Job</button>
            </aside>
            <ShowJobs />
        </section>
    )
}

export default Dashboard;