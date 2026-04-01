import { useEffect, useState, type ChangeEvent } from 'react';
import { useFilter } from './FilteredContext';

const Wallet = () => {
  const { searchQuery, setSearchQuery } = useFilter();
  const [product, setProduct] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        let result = data;

        if (searchQuery) {
          result = result.filter((p: any) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProduct(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='w-full bg-amber-300 min-h-screen p-6'>
      <input
        type="text"
        className='border-white border-2 w-[350px] px-4 py-2 rounded'
        placeholder='Enter What You Want'
        value={searchQuery}
        onChange={handleChange}
      />
      <h1 className='text-lg font-semibold mt-3'>Search: {searchQuery}</h1>

      <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {product.map((p) => (
          <div key={p.id} className='bg-white p-3 rounded-lg shadow'>
            <img src={p.image} alt={p.title} className='h-32 w-full object-contain mb-2' />
            <h2 className='font-semibold text-sm'>{p.title}</h2>
            <p className='text-gray-600 text-xs mt-1'>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
