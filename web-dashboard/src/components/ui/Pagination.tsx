import React from "react";
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'

export default function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
}) {
  const pagesToShow = [];

  for (let i = (currentPage - 2); i <= (currentPage + 2); i++ ) {
    if (i < totalPages && i >= 0) {
        pagesToShow.push(i);
    }
  }

  const oldLength = pagesToShow.length;

  if (oldLength < 5) {
    if (pagesToShow[0] == 0) {
        for (let j = 0; j < (5 - oldLength); j++) {
             if ((pagesToShow[pagesToShow.length - 1] + 1) < totalPages) {
                pagesToShow.push(pagesToShow[pagesToShow.length - 1] + 1);
            }   
        }
    } else if (pagesToShow[pagesToShow.length - 1] == (totalPages - 1)) {
        for (let j = 0; j < (5 - oldLength); j++) {
            if (pagesToShow[0] - 1 >= 0) {
                pagesToShow.unshift(pagesToShow[0] - 1); 
            }
            
        }
    }
  }

  if (pagesToShow[0] > 0) {
    pagesToShow.unshift(0);   
  }

  if ((pagesToShow[0] + 1) < pagesToShow[1]) {
    pagesToShow.splice(1, 0, '...');
  }

  if (pagesToShow[pagesToShow.length -1] < (totalPages - 1)) {
     pagesToShow.push(totalPages - 1);   
  }

  if ((pagesToShow[pagesToShow.length -1] - 1) > pagesToShow[pagesToShow.length - 2]) {
    pagesToShow.splice(pagesToShow.length - 1, 0, '...');
  }

  return (
    <div className='py-2'>
        <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesToShow.map((page, i) => {
                if (page != '...') {
                    return <BaseButton
                    key={i}
                    active={page === currentPage}
                    label={page + 1}
                    color={page === currentPage ? 'lightDark' : 'whiteDark'}
                    small
                    onClick={() => setCurrentPage(page)}
                    />     
                } else {
                    return <b key={i}>{page}</b>
                }
            })}
          </BaseButtons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {totalPages}
          </small>
        </div>
        </div>
      </div>
  );
}