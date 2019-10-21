export function CirclePosition(infos) {
    const {boxW=300,boxH=300,itemW=60,itemH=60} = infos;

    return (max,i)=>{
        const rad = ((i % max) / (max / 2)) * Math.PI;
        const sinValue = Math.sin(rad).toFixed(4);
        const cosValue = Math.cos(rad).toFixed(4);
        const height = (boxH - itemH) / 2;
        const width = (boxW - itemW) / 2;
        const bottom = (cosValue * height) + height;
        const left = (sinValue * width) + width;
        return {bottom, left};
    }
}