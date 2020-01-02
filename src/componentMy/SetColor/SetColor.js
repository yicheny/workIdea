import React from 'react';

function SetColor(source,disValue) {
    // const {source,disValue} = props;
    return <span style={styleFor()}>
        {disValue}
    </span>;

    function styleFor() {
        return {
            color:colorFor()
        };

        function colorFor() {
            if(source>0) return '#f35541';
            if(source<0) return '#43bd7e'
        }
    }
}

export default SetColor;