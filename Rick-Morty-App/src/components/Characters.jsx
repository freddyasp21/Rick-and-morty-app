import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import { GiAlienStare } from "react-icons/gi";
import { BiHeartCircle } from "react-icons/bi";

function Characters({ characters = [] }) {
    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className='col mb-4'>
                        <div className='card cardHover' style={{ minwidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title text-primary'>{item.name}</h5>
                                <hr></hr>
                                <p className='fw-semibold'><BiHeartCircle className='BiHeartCircle' /> Status: {item.status}</p>
                                <p className='fw-semibold'><GiAlienStare className='GiAlienStare'/> Species: {item.species}</p>
                                <button type="button" className="btn btn-info">
                                    <BsInfoCircleFill />More Info</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters