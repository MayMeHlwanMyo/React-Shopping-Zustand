import React from 'react'
import Cart from './Cart';
import Container from './Container';
import { Link } from 'react-router-dom';
import useCardStore from '../store/useCardStore';
import useProductStore from '../store/useProductStore';
import emptyCartImg from '../assets/shopping.png';



const CartSection = () => {

  const {carts} = useCardStore();
  const {products} = useProductStore();

  const total = carts.reduce((pv,cv) => {
    const cost = cv.quantity * products.find(({id}) => id === cv.productId).price;
    return pv + cost;
  }, 0 );
  const tax = total * 0.05;
  const netTotal = total + tax;


  return (
  <>
  <div className='flex flex-col gap-5 h-full'>
  {carts.map((cart) => (
    <Cart key={cart.id} cart={cart}
  />))}

   {carts.length === 0 && <img src={emptyCartImg} alt="empty" className='w-[230px] block mx-auto mt-10' />
  }  

  <div className='absolute bottom-10 left-0 w-full '>
    <Container className='px-5'>
    <div className='border-t border-black flex justify-end gap-10 py-3 '>
    <div className='text-right'>
      <p className='text-gray-500'>Total</p>
      <p className='text-2xl font-bold'>{total.toFixed(2)}</p>
    </div>
    <div className='text-right'>
      <p className='text-gray-500'>Tax(10%)</p>
      <p className='text-2xl font-bold'>{tax.toFixed(2)}</p>
    </div>
    <div className='text-right'>
      <p className='text-gray-500'> Net Total</p>
      <p className='text-2xl font-bold'>{netTotal.toFixed(2)}</p>
    </div>
     </div>
     <div className='text-end  mb-5'>
     <Link className='border border-black px-4 py-2 '>Order Now</Link>
     </div>
    </Container>
  </div>
  </div>
  </>
  ) 

};


export default CartSection