import style from './Paginator.module.css'
import React from 'react';

export const Paginator = ({onPageChanged, currentPage, totalUsersCount, pageSize}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={style.pageNumbers}>
			{pages.map(p => {
				return <span className={currentPage === p && style.selectedPage}
					onClick={(e) => { onPageChanged(p); }}>{p}</span>
			})
			}
		</div>
	)
}