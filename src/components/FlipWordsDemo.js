import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Box, Typography } from "@mui/material";

export function FlipWordsDemo() {
    const words = ["Beautiful", "Modern", "Resin Letters Frame", "Resin Letter keychain", "Resin MemorableFrame", "Greeting cards", "Explosion box", "Wall hanging ", "Silk thread jewellery's","Mini album"];

    return (
        <Typography sx={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: 'white',
            bgcolor: 'transparent'
        }}>
                We Provide
                <FlipWords words={words} /> 
        </Typography>
    );
}
