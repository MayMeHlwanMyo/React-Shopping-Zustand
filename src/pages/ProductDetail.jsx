import React from 'react'
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Rating from '../components/Rating';
import BreadCrumb from '../components/BreadCrumb';
import useProductStore from '../store/useProductStore';

const ProductDetail = () => {
  const {productSlug} = useParams();
  const {products} = useProductStore();
  const currentProduct = products.find((product)=> product.slug == productSlug);
  console.log(currentProduct);
  return (
    <Container>
      <BreadCrumb currentPageTitle="Product Detail" />
      <div className='border border-black p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='grid-cols-1'>
            <img src={currentProduct.image} className='block md:h-auto md:w-3/4 md:mx-auto h-[300px] mb-5 md:mb-0'   alt="" />
          </div>
          <div className='grid-cols-1 flex flex-col gap-5 items-start'>
            <h3 className='text-3xl font-bold'>{currentProduct.title}</h3>
            <p className='bg-gray-400 text-black inline-block px-5 py-1 '>{currentProduct.category}</p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className='flex justify-between w-full items-center'>
              <p>Price: ({currentProduct.price})</p>
              <button className="border px-3 py-1 border-black text-sm">Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;