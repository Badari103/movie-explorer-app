import React from "react";
import { Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";
import { COVER_PLACEHOLDER, IMAGES_PATH } from "../config";
import styled from "@emotion/styled";
import { mapGeneres } from "../lib/helpers";

const PaperStyled = styled(Paper)({
    backgroundColor: "darkgoldenrod",
    top: -40,
    position: "relative"
});

const MenuItemsStyled = styled(MenuItem)({
    paddingTop:5,
    paddingBottom: 5
});

const ImgStyled = styled("img")({
    height:"100%"
});

const LinkStyled = styled(Link)({
    display:"block",
    textDecoration:"none"
});
const TitleStyled = styled(Typography)({
    color:"black",
    padding:10
});
const CaptionTitleStyled = styled(Typography)({
    color:"black",
});
const Suggestions = ({movies}) => {
    const dispatch = useDispatch();
    const inputOnChange = (e) => {
        // if (!event.target.value) {
        //     return;
        // }
        dispatch(searchMovies(e.target.value));
    // const itemToString =() => "";    
    }
    return (
        <Downshift itemToString={()=>""}>
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem
            }) => (
                <div>
                    <TextField
                        id="search"
                        placeholder="search"
                        fullWidth={true}
                        sx={
                            { mb: 5 }
                        }
                        variant="standard"
                        InputProps={{
                            ...getInputProps({
                                onChange: inputOnChange
                            })
                        }}
                    />
                    {isOpen ? (<PaperStyled square={true}{...getMenuProps()}>
                        {movies.results.filter((item) =>
                            !inputValue || item.title.toLowerCase().includes(inputValue.toLowerCase())
                        ).map((item, index) => (
                            <MenuItemsStyled {...getItemProps({
                                item,
                                key: item.id,
                                selected: highlightedIndex == index,
                                style: {
                                    fontWeight: selectedItem === index ? 500 : 400
                                }
                            })}>
                                <LinkStyled to={`/movie/${item.id}`}>
                                    {console.log(item.id)}
                                    <Grid container={true} spacing={8}>
                                        <Grid item={true}>
                                            {item.poster_path ? (
                                                <ImgStyled src={`${IMAGES_PATH}/w92${item.poster_path}`} alt={item.title} />
                                            ) : (
                                                <ImgStyled src={COVER_PLACEHOLDER} alt={item.title} />
                                            )}
                                        </Grid>
                                        <Grid item={true}>
                                            <TitleStyled variant="h4">
                                                {item.title}
                                            </TitleStyled>
                                            <CaptionTitleStyled variant="caption">
                                                {/* {mapGeneres(item.genere_ids,generes)} */}
                                                {item.release_date}
                                            </CaptionTitleStyled>
                                        </Grid>
                                    </Grid>
                                </LinkStyled>
                            </MenuItemsStyled>
                        ))}
                    </PaperStyled>) : null}
                </div>)}

        </Downshift>
    );
}

export default Suggestions;