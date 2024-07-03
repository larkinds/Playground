export default function ColorPicker({ baseColors, changeColor }) {
  return (
    <div style={{display:"flex", justifyContent: "space-evenly", width: "100%" }}>
      {baseColors.map((colorItem) => (
        <button
          key={colorItem.key}
          style={{
            borderRadius: '50%',
            height: '2em',
            width: '2em',
            border: (colorItem.name === "duck egg blue" || colorItem.name === "bone white") ? `1px dotted pink`: `1px solid oklch(${colorItem.lightness}% ${colorItem.chroma} ${colorItem.hue})`,
            backgroundColor: `oklch(${colorItem.lightness}% ${colorItem.chroma} ${colorItem.hue})`,
          }}
          onClick={() => changeColor(colorItem.name)}
          aria-label={colorItem.name}
        ></button>
      ))}
    </div>
  );
}
