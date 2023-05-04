import React from "react";
import { ThemeProvider , createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../images/logo.36facc0711ee53c28044.png";
import styled from '@emotion/styled';
import SearchMovieSuggestions from "../containers/searchMovies";

const dark= createTheme({
    palette : {
        mode: "dark"
    }
});

const Img = styled("img")({
    marginLeft: "auto",
    marginRight:"auto",
    width: 500,
    display:"block",
    maxWidth:"100%"
});

const LayoutWrapper = styled('div')(({theme})=>({
    margin:24,
    width:"auto",
    [theme.breakpoints.up("lg")]:{
        marginLeft:"auto",
        marginRight:"auto",
        width:theme.breakpoints.values.lg
    }
}));
const Layout=({children})=>{
    return(
        <ThemeProvider theme={dark} >
            <CssBaseline />
            <LayoutWrapper>
                <Link to="/">
                    <Img src={Logo} alt="The movie db" />
                </Link>
                <SearchMovieSuggestions />
            {children} 
            </LayoutWrapper>
        </ThemeProvider>
    );
}

export default Layout;