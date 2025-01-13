import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "../customBtn/CustomButton";

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    backgroundColor: "#f5f8ff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
}));

const StyledCardMedia = styled(CardMedia)({
    height: 200,
});

const StyledCardContent = styled(CardContent)({
    padding: "1rem",
    "& .title": {
        fontSize: "18px",
        fontWeight: "700",
        color: "#2d3562",
        marginBottom: "1rem",
        cursor: "pointer",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        "&:hover": {
            color: "#3e7dff",
        },
    },
    "& .author": {
        fontSize: "14px",
        fontWeight: "500",
        color: "rgb(99, 115, 129)",
        marginBottom: "0.5rem",
    textAlign:'left',
    fontWeight: '800',
    },
    "& .pubDate": {
        fontSize: "12px",
        color: "rgb(99, 115, 129)",
        marginBottom: "1rem",
    textAlign:'left',
    },
    "& .description": {
        fontSize: "14px",
        color: "rgb(99, 115, 129)",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
});

const StyledCardActions = styled(CardActions)({
    padding: "0 1rem 1rem",
    justifyContent: "flex-end",
    bottom: 0,
});

const NewsCardMedia = ({ data }) => {
    const { title, author, pubDate, description, link } = data;
    const extractThumbnail = (html) => {
        const imgMatch = html.match(/<img[^>]+src="([^">]+)"/); // Match the first <img> tag and extract the src
        return imgMatch ? imgMatch[1] : "/static/defaultThumbnail.png"; // Fallback image
    };

    const thumbnail = extractThumbnail(description);
    return (
        <StyledCard sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
            <StyledCardMedia
                component="img"
                image={thumbnail || "/static/defaultThumbnail.png"} // Fallback thumbnail
                alt={title}
            />
            <StyledCardContent>
                <Typography className="title" component="h2">
                    {title}
                </Typography>
                <Stack direction={'row'} gap={2}>
                    <Typography className="author">By: {author || "Unknown Author"}</Typography>
                    <Typography className="author">
                        Published: {new Date(pubDate).toLocaleDateString()}
                    </Typography>
                </Stack>
                <Typography className="description">
                    {description.replace(/<\/?[^>]+(>|$)/g, "") /* Strip HTML tags */}
                </Typography>
            </StyledCardContent>
            <StyledCardActions>
                <CustomButton
                    variant="contained"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg={"#3e7dff"}
                    color={"#fff"}
                    width={"150px"}
                    radius={"8px"}
                    title={"Read More"}
                >
                    Read More
                </CustomButton>
            </StyledCardActions>
        </StyledCard>
    );
};

export default NewsCardMedia;
