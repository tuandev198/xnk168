import Image from 'next/image';

type Product = {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  cool?: boolean;
  soldOut?: boolean;
  imageUrl: string;
  fromPrice?: boolean;
};

const products: Product[] = [
  {
    name: 'Rau Tiến Vua Khô 100g',
    price: '¥ 591',
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Sả Tươi',
    price: '¥ 450',
    originalPrice: '¥ 550',
    discount: '-18%',
    cool: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Lạc (Đậu Phộng) Size Vừa',
    price: '¥ 345',
    fromPrice: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Ớt Đỏ Đông Lạnh',
    price: '¥ 179',
    discount: '-25%',
    cool: true,
    fromPrice: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Hành Tím Khô',
    price: '¥ 600',
    originalPrice: '¥ 700',
    discount: '-14%',
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Riềng Xay Đông Lạnh',
    price: '¥ 235',
    fromPrice: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Gấc Đông Lạnh',
    price: '¥ 420',
    discount: '-23%',
    cool: true,
    fromPrice: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Rau Húng Lủi 30g',
    price: '¥ 250',
    cool: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Mùi Tàu (Ngò Gai) 30g',
    price: '¥ 250',
    cool: true,
    soldOut: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Lá Chanh Đông Lạnh',
    price: '¥ 182',
    cool: true,
    fromPrice: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Rau Răm 30g',
    price: '¥ 250',
    cool: true,
    soldOut: true,
    imageUrl: '/images/gtusy.jpg',
  },
  {
    name: 'Rau Mùi (Ngò Thơm)',
    price: '¥ 250',
    cool: true,
    soldOut: true,
    fromPrice: true,
    imageUrl: '/iamges/gtusy.jpg',
  },
];

const ProductXuiloin = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#0061ff] mb-4">ĐẶC SẢN TƯƠI NGON</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="border rounded-md p-2 text-center relative bg-white">
            <div className="relative h-32 mx-auto">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
              {product.discount && (
                <div className="absolute top-0 left-0 bg-orange-500 text-white text-sm px-1">{product.discount}</div>
              )}
              {product.cool && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm px-1">Cool</div>
              )}
              {product.soldOut && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-300 text-white text-sm px-2">Hết hàng</div>
              )}
            </div>
            <div className="mt-2 text-sm font-semibold">{product.name}</div>
            <div className="text-green-600 font-bold">
              {product.fromPrice ? 'từ ' : ''}
              {product.price}
            </div>
            {product.originalPrice && (
              <div className="text-gray-400 line-through text-sm">{product.originalPrice}</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-[#0061ff] text-white py-2 px-4 rounded-full hover:bg-green-700 transition">
          Xem thêm →
        </button>
      </div>
    </div>
  );
};

export default ProductXuiloin;
