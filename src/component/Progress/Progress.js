import React from "react";
import './Progress.less';

function Progress(props) {
    const {strokeWidth,strokeColor,percent,wrapHeight} = props;
    return <div className="x_progress_wrapper" style={progressWrapperStyleFor()}>
        <div className="x_progress" style={progressStyleFor()}> </div>
    </div>;

    function progressWrapperStyleFor() {
        return {
            width:`${strokeWidth}px`,
            height:`${wrapHeight}px`,
        }
    }
    function progressStyleFor() {
        return {
            width:`${strokeWidth * percent / 100}px`,
            backgroundColor:strokeColor
        }
    }
}
Progress.defaultProps={
    percent:0,//百分比
    wrapHeight:8,
    strokeWidth:800,
    strokeColor:'#1890ff',
};

export default Progress;