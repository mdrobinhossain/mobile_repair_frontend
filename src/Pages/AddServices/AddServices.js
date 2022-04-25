import React,{useState} from 'react';
import Sidebar from '../../SharedComponents/Sidebar/Sidebar';

const AddServices = () => {
    const [serviceDetail, setServiceDetail] = useState({});
    const [photo, setPhoto] = useState(null);

    const handleBlur = (e) => {
        const newServiceDetail = {...serviceDetail};
        newServiceDetail[e.target.name] = e.target.value;
        setServiceDetail(newServiceDetail);
        console.log(newServiceDetail);
    }

    const handleChange = (e) => {
        setPhoto(e.target.files[0]);
        console.log(photo);
    }
    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('name',serviceDetail.name);
        formData.append('description',serviceDetail.description);
        formData.append('cost',serviceDetail.cost);
        formData.append('photo',photo);

        fetch('https://murmuring-sea-11106.herokuapp.com/service',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data =>console.log(data))
        .catch(error =>console.error(error));

        e.preventDefault();
    }
    return (
        <div className='md:flex'>
            <Sidebar />
            <div className="bg-blue-100 md:w-3/4">
                <div className="text-2xl py-2 px-4 font-bold">Add A Service</div>
                <form onSubmit={handleSubmit} className="p-4 w-full">
                    <div className="p-4 bg-gray-400 w-full rounded">
                        <div className="w-full md:flex">
                            <div className="flex flex-col pr-2 md:w-1/2">
                                <input onBlur={handleBlur} name="name" type="text" placeholder="Service name" className="shadow rounded p-2" />
                                <textarea onBlur={handleBlur} name="description" id="" cols="30" rows="5" placeholder="Service description" className="rounded mt-3"></textarea>
                            </div>
                            <div className="flex flex-col md:w-1/2 pt-4 md:pt-0 md:pl-2">
                                <input onBlur={handleBlur} name="cost" type="text" placeholder="Service Cost" className="shadow rounded p-2 mb-3" />
                                <input onChange={handleChange} name="photo" type="file" required placeholder="Service photo" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full relative" style={{height:'60px'}}>
                        <input type="submit" className="absolute right-0 hover:bg-blue-500 bg-blue-400 mt-4 px-6 py-2 rounded text-white" value="Submit" />
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default AddServices;