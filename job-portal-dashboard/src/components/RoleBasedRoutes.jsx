import React from 'react';
import { useSelector } from 'react-redux';
import SeekerDashboard from '../pages/SeekerDashboard';
import ManagerDashboard from '../pages/ManagerDashboard';
import RecruiterDashboard from '../pages/RecruiterDashboard';

const RoleBasedRoutes = () => {
    
    const { role } = useSelector(state => state.auth);

    if(role === 'seeker') 
        return <SeekerDashboard />;
    
    if(role === 'manager') 
        return <ManagerDashboard />;
    
    if(role === 'recruiter') 
        return <RecruiterDashboard />;

    return <p>Please login with a valid role.</p>;

};

export default RoleBasedRoutes;