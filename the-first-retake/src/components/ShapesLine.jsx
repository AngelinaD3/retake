import Shape from './Shape';

const ShapesLine = ({ isVertical = false }) => {
  const shapes = ['red', 'blue', 'green'];
  const containerStyle = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: '10px',
  };

  return (
    <div style={containerStyle}>
      {shapes.map((color) => (
        <Shape key={color} tfrColor={color} />
      ))}
    </div>
  );
};

export default ShapesLine;