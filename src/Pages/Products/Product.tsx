import { useState } from "react";
import { products } from "../../util/data";
import Card from "../../components/Card/Card";
import { Products } from "../../types/Products";
import { Select } from "react-daisyui";
import ReactPaginate from "react-paginate";
function Product() {
  const [product, setProducts] = useState<Products[]>(products);
  const [value, setValue] = useState("");

  const categories = product.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  const [itemOffset, setItemOffset] = useState(0);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 6;
  const pageCount = Math.ceil(product.length / 6);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 6) % products.length;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setItemOffset(newOffset);
  };
  const filterItems = product.filter((item) => {
    return item.category.includes(value);
  });
  const currentItems = filterItems.slice(itemOffset, endOffset);
  return (
    <div>
      <div className='flex w-full component-preview p-4 items-center justify-start gap-2 font-sans'>
        <Select
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          {uniqueCategories.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </Select>
      </div>

      <div className='grid gap-4 grid-cols-3 grid-rows-2'>
        {currentItems.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
      <div className='flex justify-end mt-7'>
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='flex justify-center space-x-2 my-4'
          pageClassName='bg-blue-200 text-white rounded px-2 py-1'
          pageLinkClassName='text-blue-700 hover:text-blue-500'
          previousClassName='bg-blue-200 text-white rounded px-2 py-1'
          previousLinkClassName='text-blue-700 hover:text-blue-500'
          nextClassName='bg-blue-200 text-white rounded px-2 py-1'
          nextLinkClassName='text-blue-700 hover:text-blue-500'
          breakClassName='bg-blue-200 text-white rounded px-2 py-1'
          breakLinkClassName='text-blue-700 hover:text-blue-500'
          activeClassName='bg-blue-300 text-white rounded px-2 py-1'
        />
      </div>
    </div>
  );
}

export default Product;
