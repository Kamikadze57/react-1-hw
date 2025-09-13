import { colors } from "../data/colors";

export const Colors = () => {
  console.log(colors);
  return (
    <ul className="colors__list">
      {colors.map((color) => {
        return (
          <li className="colors__item" key={color.id}>
            <div className="colors__view" style={{ backgroundColor: color.hex }}></div>
            <div className="colors-text__box">
            <h2 className="colors__name">{color.name}</h2>
            <p className="colors__hex">{color.hex}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
