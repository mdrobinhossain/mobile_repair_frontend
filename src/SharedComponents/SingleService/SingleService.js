import React,{useState} from 'react';
import PopUpComponent from '../../Components/PopUpComponent/PopUpComponent'
import Button from "@material-tailwind/react/Button";

const SingleService = ({service}) => {
    const {name, description, cost, dbFilePath} = service;
    const [showModal, setShowModal] = useState(false);


    
    return (
        <>
        <div className="shadow relative p-3 rounded hover:border-emerald-200 border-2 hover:shadow-lg translate-y-2">
            <img className='w-full' style={{height:'250px'}} src={`http://localhost:5000/${dbFilePath}`} alt="mjkj" />
            <div className="text-blue-500 text-xl font-bold">{name}</div>
            <p className="text-gray-500 my-2">{description.slice(0,70)}...</p>
            <div className="flex justify-between items-center">
                <h3 className="text-blue-500">${cost}</h3>
                <Button className="bg-blue-500 rounded px-4 py-2"
                    color="lightBlue"
                    type="button"
                    onClick={(e) => setShowModal(true)}
                    ripple="light"
                >
                    Get Service
                </Button>
            </div>
            
        </div>
        <PopUpComponent showModal={showModal} setShowModal={setShowModal} service={service}/>
        </>
    );
};

export default SingleService;