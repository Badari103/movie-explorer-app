import { ImageList, ImageListItem, ImageListItemBar, styled,useMediaQuery } from "@mui/material";
import React from "react";
import { IMAGES_PATH } from "../config";
import { Link } from "react-router-dom";
import {useTheme} from "@mui/material/styles";

const ImgStyled= styled("img")({
    height:"100%",
    width:"100%",
    objectFit:"cover"
})

const ImageListItemStyled= styled(ImageListItem)({
    overflow:"hidden"
})

const Movies = ({movies})=>{
    const theme=useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <ImageList cols={matchDownMd? 1: 5} rowHeight={365} gap={12} >
            {movies.results.map((movie)=>(
                <ImageListItemStyled key={movie.id} >
                    <Link to={`/movie/:${movie.id}`}>
                        {
                            movie.poster_path && (
                                <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`}
                                alt={movie.title}
                                ></ImgStyled>
                            )
                        }
                    </Link>
                    <ImageListItemBar 
                    title={movie.title}
                    subtitle={movie.release_date} />
                </ImageListItemStyled>
            ))}
        </ImageList>
    )
}

export default Movies;