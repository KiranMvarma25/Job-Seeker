import React from 'react';
import { useSelector } from 'react-redux';

const RecruiterDashboard = () => {
    
    const { jobs, applications } = useSelector(state => state.jobs);

    const getJobTitle = (id) => jobs.find(job => job.id === id)?.title || 'N/A';

    return (
        <div className="dashboard">
            <h2>Recruiter Dashboard</h2>
            
            <div className="scroll-section">
                <h3>All Job Applications</h3>
                {
                applications.length === 0 ? (
                    <p>No applications yet.</p>
                ) : (
                    applications.map((app, index) => (
                    <div key={index} className="job-card">
                        <p><strong>Applicant:</strong> {app.user}</p>
                        <p><strong>Job:</strong> {getJobTitle(app.jobId)}</p>
                    </div>
                    ))
                )
            }
            </div>
        </div>
    );
};

export default RecruiterDashboard;