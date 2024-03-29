import style from './Paginator.module.css'
import React, { useState } from 'react';
import cn from 'classnames';

const Paginator = ({ onPageChanged, currentPage, totalItemsCount, pageSize, portionSize = 20 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	//*мой вариант вычисления
	//let leftPortionPageNumber = (portionNumber * portionSize) - (portionSize - 1);
	return (
		<div className={style.paginator}>
			{portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>
			}

			{pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return (
						<span className={cn(
							{
								[style.selectedPage]: currentPage === p
							},
							style.pageNumber)}
							key={p}
							onClick={(e) => {
								onPageChanged(p);
							}}>
							{p}
						</span>
					)
				})
			}
			{portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }} >NEXT</button>
			}
		</div>
	)
}
export default Paginator;