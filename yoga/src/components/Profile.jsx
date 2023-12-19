import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch('http://localhost:3001/profile', {
                method: "GET", headers: {
                    'Content-Type': 'application/json',
                }
            });
            const res_data = await res.json();
            setData(res_data.user);
            console.log(data);
        }
        fetchProfile()
    }, [data])
    return (
        <div>
            {data.map((val, i) => (
                <li key={i}>
                    <h1>{val.name}</h1>
                    <h2>{val.age}</h2>
                    <h3>{val.selectedBatch}</h3>
                </li>

            ))}
        </div>
    )
}

export default Profile



// import { useParams } from 'react-router-dom';

// const Profile = () => {
//     const { id } = useParams();
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             const res = await fetch(`/profile/${id}`, {
//                 method: "GET", 
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             const res_data = await res.json();
//             const final = await res_data.user
//             setData(final);
//         };

//         fetchUserProfile();
//     }, []);

//     return (
//         <div>

//             <div>
//                 <h2>User Profile</h2>
//                 <p>User ID:sfsfsf {data?._id}</p>
//             </div>

//         </div>
//     )
// }

// export default Profile