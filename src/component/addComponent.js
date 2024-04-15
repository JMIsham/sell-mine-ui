import React from 'react';
import { useState } from 'react';
import { fetchAllAds } from '../repository/ads.repository';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const AddComponent = () => {
    const [ads, setAds] = useState([]);


    return (
        <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Ads</h2>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Button variant="contained" onClick={async () => {
                    // alert("Fetching Ads");
                    const fetchedAds = await fetchAllAds();
                    console.log("ads", fetchedAds);
                    setAds(fetchedAds);
                }}>Refresh</Button>

                <Button variant="contained" color="success" onClick={async () => {
                    // alert("Fetching Ads");
                    const fetchedAds = await fetchAllAds();
                    console.log("ads", fetchedAds);
                    setAds(fetchedAds);
                }}>Create</Button>
            </ButtonGroup>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {ads.map(ad => (
                    <li key={ad.id} style={{ marginBottom: '10px', border: '5px solid #ccc', padding: '10px' }}>
                        <h3>{ad.title}</h3>
                        <p>{ad.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddComponent;