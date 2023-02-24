import React, { Suspense } from "react";

const withSuspense = (Componenet) => {
	return (props) => {
		return (
			<Suspense fallback={<div>Загрузка...</div>}>
				<Componenet />
			</Suspense>
		)
	}

}
export default withSuspense;