import { Link } from "react-router-dom";
function ProductItem({name, category, price, urlImage}) {
  return (
    <Link to='/products-detail'>
    <div className="bg-white rounded-2xl cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          className="fill-gray-800 inline-block"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          />
        </svg>
      </div>
      <div className=" overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={urlImage}
          alt="Product 1"
          className="h-full w-full object-contain rounded-t-lg"
        />
      </div>
      <div className="m-5">
        <h3 className="text-lg font-extrabold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{category} </p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">{price}đ</h4>
      </div>
    </div></Link>
  );
}
export default ProductItem;
