import React from 'react';


const ChildComponent = ({greet}) => {
    
    return (
        <div>
            <button onClick={() => greet('child')}>Greet your Parent Component</button>
        </div>
    );
}

export default ChildComponent;
