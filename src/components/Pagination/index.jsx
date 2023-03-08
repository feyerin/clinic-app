import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, changeHandlerPagination }) {
	return (
        <ReactPaginate 
            containerClassName="inline-flex items-center pt-2 float-right shadow-md"
            pageCount={pageCount}
            breakClassName="px-3 py-2 leading-tight text-gray-500 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            onPageChange={changeHandlerPagination}
            pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            activeClassName="bg-grey-50 pt-2"
            nextLinkClassName="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            nextLabel={<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>        }
            previousLabel={<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>}
            previousLinkClassName="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
        />
		
	);
}
