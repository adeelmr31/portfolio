"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import BgTestimonials from "/static/testimonial.svg";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    margin: "100px auto 0 auto",
    backgroundColor: "#f5f8ff",
    padding: "8rem 0",
    "& > h4": {
        marginBottom: "1rem",
    },
    "& .margin__bottom": {
        marginBottom: "4rem",
    },
}));

const TestimonialsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    gap: "2rem",
    "& > div": {
        backgroundColor: "#fff",
        flexBasis: "calc(40% - 1rem)",
        borderRadius: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "& .bg": {
            position: "absolute",
            top: "0",
            right: "0",
        },
        [theme.breakpoints.down("md")]: {
            flexBasis: "calc(80% - 1rem)",
        },
    },
}));

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: "100",
    width: "100%",
    height: "100%",
    padding: "2rem",
    "& > p": {
        textAlign: "left",
    },
}));

// const ImgUserT = styled("div")(({ theme }) => ({
//     width: "100%",
//     height: "190px",
//     display: "flex",
//     gap: "1.4rem",
//     marginBottom: "2rem",
//     "& .user__info": {
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         "& h5": {
//             fontSize: "1.2rem",
//             fontWeight: "bold",
//             lineHeight: "1.5rem",
//             width: "100%",
//             textAlign: "left",
//         },
//         "& p": {
//             fontSize: "16px",
//             color: "rgb(99, 115, 129)",
//             textAlign: 'left'
//         },
//     },
//     "& .img__user": {
//         minWidth: '190px',
//         width: "190px",
//         height: "190px",
//         overflow: "hidden",
//         borderRadius: "8px",
//         "& img": {
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//         },
//     },
// }));
const ImgUserT = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto", // Updated to adapt to the new layout
    display: "flex",
    gap: "1.4rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column", // Stacks the items vertically on small screens
        alignItems: "center",   // Centers the content
        gap: "1rem",            // Reduces the gap
    },
    "& .user__info": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        "& h5": {
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.5rem",
            width: "100%",
            textAlign: "left",
        },
        "& p": {
            fontSize: "16px",
            color: "rgb(99, 115, 129)",
            textAlign: "left",
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center", // Centers text on small screens
        },
    },
    "& .img__user": {
        minWidth: "190px",
        width: "190px",
        height: "190px",
        overflow: "hidden",
        borderRadius: "8px",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1rem", // Adds spacing below the image
        },
    },
}));

const data = [
    { id: 1, name: 'Fixed Cost', img: '/static/fcost.svg', desc: 'Best suited for projects with well-defined requirements, this option offers a predictable budget and timeline for seamless execution.', fade: 'fade-right' },
    { id: 2, name: 'Resource Augmentation', img: '/static/Raugment.svg', desc: 'Expand your team with specialized professionals who integrate smoothly into your operations to address dynamic project demands.', fade: 'fade-left' },
    { id: 3, name: 'Dedicated Teams', img: '/static/DTeams.svg', desc: 'A fully focused team of experts committed to your project, delivering flexibility, reliability, and continuous excellence.', fade: 'fade-right' },
    { id: 4, name: 'Consultation', img: '/static/consult.svg', desc: 'Expert guidance to shape your strategy, architecture, and technology stack.', fade: 'fade-left' },


]

const Engagements = () => {
    return (
        <Container>
            <h4 data-aos="fade-up">Engagement Models</h4>
            <p data-aos="fade-up">
            Choose the perfect collaboration model that aligns with your project needs, budget, and timeline.
            </p>
            {/* <p data-aos="fade-up">
                Here’s what they say about our commitment to excellence and strong relationships.
            </p> */}
            <TestimonialsContainer sx={{ mt: 2 }}>
                {data.map((item, index) => 
                   ( <div key={index+1} data-aos={item?.fade}>
                        <BgTestimonials className="bg" />
                        <Content>
                            <ImgUserT>
                                <div className="img__user">
                                    <img src={item?.img} alt="user" />
                                </div>
                                <div className="user__info">
                                    <h5>{item?.name}</h5>
                                    <p>
                                        {item?.desc}
                                    </p>
                                </div>
                            </ImgUserT>

                        </Content>
                    </div>))}

            </TestimonialsContainer>
        </Container>
    );
};

export default Engagements;
