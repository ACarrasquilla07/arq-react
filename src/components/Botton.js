import React from "react";
import { ThemeContext } from '../context/theme';

class Button extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{ backgroundColor: theme.background, color: theme.foreground }}
            />
        );
    }
}

Button.contextType = ThemeContext;

export default Button;