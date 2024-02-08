import masonry from "data-masonry";

document.addEventListener("DOMContentLoaded", masonry());

const Masonry = ({ images }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-masonry>
      <li className="h-64">
        <img src={images[1]} alt="hi" />
      </li>

      <li className="h-64">
        <img src={images[2]} alt="hi" />
      </li>
      <li className="h-64">
        <img src={images[3]} alt="hi" />
      </li>
      <li className="h-64">
        <img src={images[4]} alt="hi" />
      </li>
      <li className="h-64">
        <img src={images[5]} alt="hi" />
      </li>
      <li className="h-64">
        <img src={images[6]} alt="hi" />
      </li>
    </ul>
  );
};

export default Masonry;
