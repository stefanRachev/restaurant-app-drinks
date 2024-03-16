import imageDrinks from "../../../assets/menuItems/drinks.jpg";
import imageGrill from "../../../assets/menuItems/grilled.jpg";
import imagePizza from "../../../assets/menuItems/pizza.webp";
import imageAppetizers from "../../../assets/menuItems/appetizers.webp";
import Path from "../../../path";


const items = [
  {
    name: "Наптики",
    url: Path.Drinks,
    image: imageDrinks,
  },
  {
    name: "Скара",
    url: Path.Grilled,
    image: imageGrill,
  },
  {
    name: "Пици",
    url: Path.Pizza,
    image: imagePizza,
  },
  {
    name: "Мезета и гарнитури",
    url: Path.Appetizers,
    image: imageAppetizers,
  },
];
export default items;
