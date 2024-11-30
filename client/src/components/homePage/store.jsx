import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ProductItem from "./productItem";
function Store() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? product.Category.name === categoryFilter
      : true;
    return matchesSearchTerm && matchesCategory;
  });
  const uniqueCategories = [
    ...new Set(products.map((product) => product.Category.name)),
  ];
  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto w-[85%]">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Cửa hàng</h2>
        <div className="mb-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button
              onClick={() => handleCategoryClick("")}
              className={`px-4 py-2 rounded-full font-semibold ${
                categoryFilter === "" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Tất cả phân loại
            </button>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full font-semibold ${
                  categoryFilter === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-lg w-full mb-4"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 my-12">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              category={product.Category.name}
              price={product.price}
              urlImage={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
