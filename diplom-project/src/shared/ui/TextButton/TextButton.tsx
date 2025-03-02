import Button from "@mui/material/Button/Button";
import { ReactNode } from "react";

interface TextButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

function TextButton(props: TextButtonProps) {
    return (
        <Button href="#text-buttons" onClick={props.onClick}>{props.children}</Button>
    );
}

export default TextButton