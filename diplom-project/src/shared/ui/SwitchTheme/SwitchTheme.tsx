import { Switch } from "@mui/material";
import { useThemeContext } from "../../../context/Theme.provider";

const SwitchTheme = () => {
    const { darkMode, toggleTheme } = useThemeContext();

    return (
        <div className="switch-theme">
            light
            <Switch checked={darkMode} onChange={toggleTheme} />
            Dark
        </div>
    );
};

export default SwitchTheme;