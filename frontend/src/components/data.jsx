import React from 'react'
import  { useEffect, useState } from 'react';

const data = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/profile`, {
          
        });

        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : profileData ? (
        <div>
          <h2>{profileData.user.username}'s Profile</h2>
          <p>DOB: {profileData.dob}</p>
        </div>
      ) : (
        <p>No profile data found</p>
      )}
    </div>
  )
}

export default data
