import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, editJob, deleteJob  } from '../features/jobs/jobSlice';

const ManagerDashboard = () => {
    
    const dispatch = useDispatch();

    const { jobs } = useSelector(state => state.jobs);
    const { user } = useSelector(state => state.auth);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editingId){
          dispatch(editJob({ id: editingId, updatedData: { title, description } }));
          setEditingId(null);
        } 
        else{
          dispatch(addJob({ id: Date.now(), title, description, postedBy: user }));
        }
        setTitle('');
        setDescription('');
    };

    const handleEdit = (job) => {
        setEditingId(job.id);
        setTitle(job.title);
        setDescription(job.description);
    };
    
    const handleDelete = (id) => {
        dispatch(deleteJob(id));
    };
    
    const myJobs = jobs.filter(job => job.postedBy === user);

    return (
        <div className="dashboard">
            <h2>Hiring Manager Dashboard</h2>
            <div className="job-section">
                
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    
                    <button type="submit">Post Job</button>
                </form>
            </div>

            <div className="job-section">
                <h3>Your Posted Jobs</h3>
                <div className="scroll-section">{
                    myJobs.length === 0 ? (
                        <p>You haven't posted any jobs yet.</p>
                        ) : (
                        myJobs.map(job => (
                        <div key={job.id} className="job-card">
                            <h4>{job.title}</h4>
                            <p>{job.description}</p>
                            <button onClick={() => handleEdit(job)}>Edit</button>
                            <button onClick={() => handleDelete(job.id)}>Delete</button>
                        </div>
                    ))
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;