import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
    name: 'jobs',
  
    initialState: {
        jobs: [
            {
                id: 1,
                title: "SDE",
                description: "Amazon"
            },
            {
                id: 2,
                title: "Data Scientist",
                description: "IBM"
            },
        ],
        applications: [], 
    },

    reducers: {
        
        addJob: (state, action) => {
            state.jobs.push(action.payload);
        },

        editJob: (state, action) => {
            const index = state.jobs.findIndex(job => job.id === action.payload.id);
            if(index !== -1) {
              state.jobs[index] = { ...state.jobs[index], ...action.payload.updatedData };
            }
        },

        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter(job => job.id !== action.payload);
            state.applications = state.applications.filter(app => app.jobId !== action.payload);
        },
        
        applyJob: (state, action) => {
            const { jobId, user } = action.payload;
            state.applications.push({ jobId, user });
        },

        withdrawApplication: (state, action) => {
            const { jobId, user } = action.payload;
            state.applications = state.applications.filter(app => !(app.jobId === jobId && app.user === user));
        },

    },
});

export const { addJob, editJob, deleteJob, applyJob, withdrawApplication } = jobSlice.actions;
export default jobSlice.reducer;