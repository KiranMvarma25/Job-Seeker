import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyJob, withdrawApplication  } from '../features/jobs/jobSlice';

const SeekerDashboard = () => {
    
    const dispatch = useDispatch();
    const { jobs, applications } = useSelector(state => state.jobs);
    const { user } = useSelector(state => state.auth);

    const handleApply = (jobId) => {
        
        const alreadyApplied = applications.find(app => app.jobId === jobId && app.user === user);
        
        if(alreadyApplied){
            alert('You already applied for this job.');
            return;
        }
        dispatch(applyJob({ jobId, user }));
        alert('Application submitted!');
    };

    const handleWithdraw = (jobId) => {
        dispatch(withdrawApplication({ jobId, user }));
        alert('Application withdrawn!');
    };

    const isAppliedTo = (jobId) => applications.some(app => app.jobId === jobId && app.user === user);
    
    const appliedJobIds = applications.filter(app => app.user === user).map((app) => app.jobId);
    
    const appliedJobs = jobs.filter(job => appliedJobIds.includes(job.id));

    return (
        
        <div className="dashboard">
            <h2>Job Seeker Dashboard</h2>
            <div className="job-section">
                <h3>Available Jobs</h3>
                {
                    jobs.length === 0 ? (
                        <p>No jobs posted yet.</p>
                        ) : (
                            jobs.map(job => (
                                <div key={job.id} className="job-card">
                                    <h4>{job.title}</h4>
                                    <p>{job.description}</p>
                                    {
                                        isAppliedTo(job.id) ? (
                                            <button onClick={() => handleWithdraw(job.id)}>Withdraw</button>
                                            ) : (
                                            <button onClick={() => handleApply(job.id)}>Apply</button>
                                    )}
                                </div>
                            ))
                        )
                    }
                </div>

            <div className="job-section">
                <h3>Your Applied Jobs</h3>
                {
                    appliedJobs.length === 0 ? (
                        <p>You haven’t applied to any jobs yet.</p>
                    ) : (
                        appliedJobs.map(job => (
                            <div key={job.id} className="job-card">
                                <h4>{job.title}</h4>
                                <p>{job.description}</p>
                                <span className="badge">Applied</span>
                                <button onClick={() => handleWithdraw(job.id)}>Withdraw</button>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default SeekerDashboard;