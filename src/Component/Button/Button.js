import React from "react"
function Button({ label }) {
    return (
        <div data-testid="button" className="button-style">
           Hii {label}
        </div>
    );
}

export default Button;
