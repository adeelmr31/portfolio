"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import BgTestimonials from "/static/testimonial.svg";
import { Box, Grid } from "@mui/material";



const data = [
    { id: 1, name: 'Fixed Cost', img: '/static/fcost.svg', desc: 'Best suited for projects with well-defined requirements, this option offers a predictable budget and timeline for seamless execution.', fade: 'fade-right' },
    { id: 2, name: 'Resource Augmentation', img: '/static/Raugment.svg', desc: 'Expand your team with specialized professionals who integrate smoothly into your operations to address dynamic project demands.', fade: 'fade-left' },
    { id: 3, name: 'Dedicated Teams', img: '/static/DTeams.svg', desc: 'A fully focused team of experts committed to your project, delivering flexibility, reliability, and continuous excellence.', fade: 'fade-right' },
    { id: 4, name: 'Consultation', img: '/static/consult.svg', desc: 'Expert guidance to shape your strategy, architecture, and technology stack.', fade: 'fade-left' },


]

const Engagements = () => {
    return (
        <Box textAlign={'center'}>
            <h4 data-aos="fade-up">Engagement Models</h4>
            <p data-aos="fade-up">
                Choose the perfect collaboration model that aligns with your project needs, budget, and timeline.
            </p>
            {/* <p data-aos="fade-up">
                Here’s what they say about our commitment to excellence and strong relationships.
            </p> */}
            <Grid container sx={{ mt: 2, width: '80%' , margin:'0 auto'}}>
                {data.map((item, index) =>
                (<Grid  item padding={2} xs={12} sm={8} md={6} key={index + 1} data-aos={item?.fade}>
                    {/* <BgTestimonials className="bg" /> */}
                    <Grid sx={{display:'flex', flexDirection:{xs: 'column', lg: 'row'},}} container >
                        <Grid item xs={12} sm={5} md={4} >
                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                <img src={item?.img} alt="user" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} md={7} display={'flex'} flexDirection={'column'} justifyContent={'center'} >

                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }} >
                                <h5>{item?.name}</h5>
                                <p>
                                    {item?.desc}
                                </p>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>))}

            </Grid>
        </Box>
    );
};

export default Engagements;
