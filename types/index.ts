import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyle?: string;
   handleClick?: 
   MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";
}

//what and what should it have this is what interface does 