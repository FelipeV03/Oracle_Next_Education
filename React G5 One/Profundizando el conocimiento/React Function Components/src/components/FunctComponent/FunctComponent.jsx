import React, { useState } from 'react';
import './FunctComponent.css';


function FunctComponent() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                <button
                    onClick={() => {
                        return (
                            setValue(value - 1)
                        )
                    }}
                > - </button>

                <span>{value}</span>

                <button
                    onClick={() => {
                        return (
                            setValue(value + 1)
                        )
                    }}
                > + </button>
            </p>
        </div>
    );
}

export default FunctComponent;
