import { useEffect } from 'react';

function useInterval(callback: () => void, delay: number | null) {
	useEffect(() => {
		//0 is valid
		if (!delay && delay !== 0) {
			return;
		}
		const interval = setInterval(callback, delay);

		//cleanup
		return () => {
			clearInterval(interval);
		};
	}, [delay]);
}

export default useInterval;
