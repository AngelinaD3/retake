const Shape = ({ tfrColor = 'red', tfrType = 'circle' }) => {
    const shapeStyle = {
      width: '50px',
      height: '50px',
      backgroundColor: tfrColor,
      borderRadius: tfrType === 'circle' ? '50%' : '0%',
    };
  
    return <div style={shapeStyle} />;
  };
  
  export default Shape;