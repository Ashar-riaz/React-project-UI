import React from 'react';
import Navbar from './Navbar';
import main_image from './../pic/Untitled design.png';
import './home.css';
import mission from './../pic/mission.webp';
import vision from './../pic/Vision.webp';
import value from './../pic/Values.webp';
import tyre from './../pic/tyre.png';
import pressure from './../pic/presure.webp';
import fit from './../pic/fit.webp';
import save from './../pic/save.webp';
import diff_tyre from './../pic/diff_tyre.webp';
import rotate from './../pic/rotate.webp';
import tyreicon from './../icon/tyreicon.webp';
import shipping from './../icon/shipping.webp';
import fitting from './../icon/fitting.webp';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="image-container">
                <img src={main_image} alt="" style={{ width: '100%' }} />
                <div className="text-overlay">Original Tyres & Best Tyre Prices
                    <div className="text-over">Established Since 1985

                    </div>


                </div>
                <div className="">
                    <button className='bttn  custom-button'>Tyre Finder</button>


                </div>
            </div>
            <div className="container">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span className='text-container mt-5'>OK, SO WHY TYRE POINT?</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <span className='text-container1 mt-3'>Well, lots of reasons, but most importantly because..</span>
                    </div>
                </div>
            </div>
            <div className="box d-flex flex-row">
                <div className="d-flex flex-column mt-5">
                    <div className='d-flex flex-column text-heading jsutify-content-cemter align-items-center'>MISSION</div>
                    <div className="d-flex flex-column mt-2 jsutify-content-cemter align-items-center">
                        <img src={mission} alt="" style={{ width: '100px' }} />
                    </div>
                    <div className="d-flex flex-column jsutify-content-cemter align-items-center">
                        <span>Tyre Point's mission is to bring a radical change in tyre retail</span>
                        <span>industry by providing 100% genuine imported tyres across</span>
                        <span>Pakistan.</span>
                    </div>

                </div>
                <div className="box d-flex flex-column mt-5">
                    <div className='d-flex flex-column text-heading jsutify-content-cemter align-items-center'>VISION</div>
                    <div className="d-flex flex-column jsutify-content-cemter align-items-center mt-2">
                        <img src={vision} alt="" style={{ width: '100px' }} />
                    </div>
                    <div className="d-flex flex-column jsutify-content-cemter align-items-center">
                        <span>Our vision is to establish long-lasting relationships with our</span>
                        <span>customers and partners.</span>
                    </div>

                </div>
                <div className="box d-flex flex-column mt-5">
                    <div className='d-flex flex-column text-heading jsutify-content-cemter align-items-center'>VALUE</div>
                    <div className="d-flex flex-column mt-2 jsutify-content-cemter align-items-center">
                        <img src={value} alt="" style={{ width: '100px' }} />
                    </div>
                    <div className="d-flex flex-column jsutify-content-cemter align-items-center">
                        <span>Our core values at Tyre Point are Transparency, Quality, High</span>
                        <span>Standards, Customer Service and Growth.</span>
                    </div>

                </div>
            </div>

            <div className="mt-5">
                <img src={tyre} alt="" />
                <button className='bttn button '>Shop Now!</button>
            </div>
            <div className="">
                <div className="d-flex mt-5 justify-content-center align-items-center ">
                    <span className='text-main'>GOOD TO KNOW ABOUT TYRES</span>
                </div>
                <div className="d-flex flex-row flex-wrap mb-5">
                    <div className="d-flex flex-column mt-5" style={{ marginLeft: '24px' }}>
                        <img src={pressure} alt="" />
                        <div className="min-box">
                            <div className="d-flex flex-wrap">
                                <h2 className='box-text'>Why is tire pressure important? </h2>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className=" container">
                                <p>Keeping the right tire pressure ensures safety by improving traction and handling. It also boosts fuel efficiency and extends tire lifespan. Incorrect pressure can lead to accidents and uneven tire wear. Regularly check and maintain proper tire pressure for a smoother, safer ride.</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column mt-5" style={{ marginLeft: '24px' }}>
                        <img src={fit} alt="" />
                        <div className="min-box">
                            <div className="d-flex flex-wrap">
                                <h2 className='box-text'>How to change a flat tire? </h2>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className=" container">
                                <p>Changing a flat tire is a crucial skill for every driver. Start by finding a safe location to park your car, away from traffic. Use the tools provided—jack, lug wrench, and spare tire. Lift the car with the jack, loosen the lug nuts, and remove the flat tire. Replace it with the spare, tighten the lug nuts, lower the car, and finally, check the tire pressure. This simple process can get you back on the road safely.</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column mt-5" style={{ marginLeft: '24px' }}>
                        <img src={diff_tyre} alt="" />
                        <div className="min-box">
                            <div className="d-flex flex-wrap">
                                <h2 className='box-text'>What’s the differents between tire types? </h2>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className=" container">
                                <p>Making the right choice of tires is very important part as they play a very essential role in the safety of your life while</p>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-column mt-5" style={{ marginLeft: '23px' }}>
                        <img src={rotate} alt="" />
                        <div className="min-box">
                            <div className="d-flex flex-wrap">
                                <h2 className='box-text'>What happens if you don’t rotate your tires? </h2>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className=" container">
                                <p>Tires are a very important part of your car. From the safety to overall perfomance tires plays a great role. As a major part of</p>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-column mt-5" style={{ marginLeft: '22px' }}>
                        <img src={save} alt="" />
                        <div className="min-box">
                            <div className="d-flex flex-wrap">
                                <h2 className='box-text'>How can your tires help save you gas money? </h2>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className=" container">
                                <p>Guranteeing and keeping up a vehicle can go with some staggering and unexpected costs. With these easy-to-get vehicle support affinities you can help manage those</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column mb-5">
                <div className="d-flex mt-5 justify-content-center align-items-center ">
                    <span className='text-main'>How Does Road Rover Work?</span>
                </div>
                <div className="d-flex mt-2 justify-content-center align-items-center flex-column">
                    <img src={tyreicon} alt="" />
                    <h5>FIND THE RIGHT TYRES</h5>
                    <p>Choose from a wide range of tyre brands</p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mt-4">
                    <div className="d-flex mt-2 justify-content-center align-items-center flex-column">
                        <img src={shipping} alt="" />
                        <h5>GET DOOR-STEP DELIVERY</h5>
                        <p>Get your tyres delivered at your door-step usually in 3 business days*</p>
                    </div>
                    <div className="mt-5 ms-5">
                        <h5>OR</h5>
                    </div>
                    <div className="d-flex mt-2 justify-content-center align-items-center flex-column ms-5">
                        <img src={fitting} alt="" />
                        <h5>GET IN-SHOP DELIVERY & FITMENT</h5>
                        <p>Get your tyres fitted directly at a ROAD ROVER recommended fitment centre</p>
                    </div>
                </div>
            </div>
        <div className="brand-box">

        </div>

        </>
    )
}
