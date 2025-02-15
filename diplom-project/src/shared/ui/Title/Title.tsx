import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

function Title({ children }: TitleProps) {
    return (
        <div className="wrap-title">
            <h2 className="title_title">{children}</h2>
        </div>

    );
}

export default Title;

