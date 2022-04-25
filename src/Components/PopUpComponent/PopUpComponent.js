import React,{useState} from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import "@material-tailwind/react/tailwind.css";

export default function PopUpComponent({showModal,setShowModal,service}) {
    const [customerDetail, setCustomerDetail] = useState({})

    const handleBlur = (e) => {
        const newCustomerDetail = {...customerDetail};
        newCustomerDetail[e.target.name] = e.target.value;
        setCustomerDetail(newCustomerDetail);
    }
    const handleSubmit = (e) => {
        const date = new Date();
        customerDetail.date = date.toString();
        customerDetail.serviceTitle = service.name;
        customerDetail.cost = service.cost;
        fetch("https://murmuring-sea-11106.herokuapp.com/customer", {
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(customerDetail)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setShowModal(false)
                alert("Your request has been submitted. Thank You")
            }
        })
        .catch(res => console.log(res))
        e.preventDefault();

    }

    return (
        <>
            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    {service.name}
                </ModalHeader>
                <ModalBody>
                    <div className="flex justify-center" style={{width:'350px'}}>
                        <form onSubmit={handleSubmit} className="w-full">
                            <input required onBlur={handleBlur} name="name" className="w-full p-2 my-2 outline outline-offset-2 outline-1" type="text" placeholder="Your Name"/>
                            <input required onBlur={handleBlur} name="email" className="w-full p-2 my-2 outline outline-offset-2 outline-1" type="email" placeholder="Your Email"/>
                            <input required onBlur={handleBlur} name="model" className="w-full p-2 my-2 outline outline-offset-2 outline-1" type="text" placeholder="Model of Your phone" />
                            <input className="w-full p-2 my-2 text-white hover:outline hover:outline-offset-2 hover:outline-1 bg-blue-500" type="submit" value="Save"/>
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}