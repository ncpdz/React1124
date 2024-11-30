import ProductItem from "./productItem";
function Store() {
  const dataNewArrivals = [
    {
      id: 1,
      name: "Áo nam 1",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 2,
      name: "Áo nam 2",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 3,
      name: "Áo nam 3",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 4,
      name: "Áo nam 4",
      description: "Mô tả hehe",
      category: "T - Shirt",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 1,
      name: "Áo nam 1",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 2,
      name: "Áo nam 2",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 3,
      name: "Áo nam 3",
      description: "Mô tả hehe",
      category: "Polo",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
    {
      id: 4,
      name: "Áo nam 4",
      description: "Mô tả hehe",
      category: "T - Shirt",
      price: 200000,
      urlImage:
        "https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlQVEFSODg4MDQwMi82MTU4OTI0Yy01N2Q3LTRiNzQtODg5MC0yZjgzYTU0MWIzYmRfMkUzOEM0MTY4N0VBMjQzNzhBMkUwNDE0Q0I2MkQyMUUuanBn0",
    },
  ];
  let datas = dataNewArrivals.map((item, index) => (
    <ProductItem key={index} {...item} />
  ));
  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Cửa hàng</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {datas}
        </div>
      </div>
    </div>
  );
}

export default Store;
