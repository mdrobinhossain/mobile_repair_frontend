import React, { useEffect,useState } from 'react';
import SingleMechanic from '../../SharedComponents/SingleMechanic/SingleMechanic';

const OurMechanics = () => {
    const [mechanics, setMechanics] = useState([]);
    useEffect(()=>{
        fetch('https://murmuring-sea-11106.herokuapp.com/loadmechanics')
        .then(res => res.json())
        .then(data => setMechanics(data))

    },[])
    return (
        <div className="flex justify-center mt-16">
            <div className="w-4/5">
                <h2 className="text-center text-3xl font-bold text-blue-500">Our Mechanics</h2>
                <p className="text-gray-300 text-center mb-8">We have the best mechanics in this city</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        mechanics.slice(0,3).map((mechanic) => <SingleMechanic mechanic={mechanic} key={mechanic._id}/>)
                    }
                    

                </div>
            </div>
        </div>
    );
};

export default OurMechanics;