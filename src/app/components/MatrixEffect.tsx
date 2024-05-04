"use client";

import { useEffect, useRef } from "react";

export default function MatrixEffect(){
    const canvas = useRef<HTMLCanvasElement>(null);
    const setCanvasHeightDimensions = () => {
        const navbarHeight : number = 80;
        canvas.current!.height = window.innerHeight - navbarHeight;
        if(window.innerWidth <= 968) canvas.current!.width = window.innerWidth;
        else canvas.current!.width = (window.innerWidth / 2) - 250;
    }
    const playEffect = () => {
        const context : CanvasRenderingContext2D | null | undefined = canvas.current?.getContext("2d");
        const binary : string = "01";
        const fontSize : number = 16;
        const columns : number = Math.floor(canvas.current!.width / fontSize);
        const yCoords : number[]= new Array(columns).fill(1);

        const draw = () => {
            context!.fillStyle = "#0000000d";
            context!.fillRect(0, 0, canvas.current!.width, canvas.current!.height);

            context!.fillStyle = "#0F0";
            context!.font = `${fontSize}px monospace`;

            for (let i = 0; i < yCoords.length; i++) {
                const chosenCharacter : string = binary.charAt(Math.floor(Math.random() * binary.length));
                context!.fillText(chosenCharacter, i * fontSize, fontSize * yCoords[i]);
                if(yCoords[i] * fontSize > canvas.current!.height && Math.random() > 0.975) yCoords[i] = 0;
                yCoords[i]++;
            }
        }
        setInterval(draw, 60);
    }
    useEffect(() => {
        setCanvasHeightDimensions();
        playEffect();
    }, [])
    return(
       <canvas ref={canvas}></canvas> 
    )
}