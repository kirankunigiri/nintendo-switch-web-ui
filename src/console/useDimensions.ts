import { useEffect, useState } from 'react';

const calculateDimensions = (): { width: number, height: number, fontSize: number } => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	const aspectRatio = 16 / 9;

	let width = windowWidth;
	let height = windowWidth / aspectRatio;

	if (height > windowHeight) {
		height = windowHeight;
		width = windowHeight * aspectRatio;
	}

	const baseWidth = 1920;
	const baseFontSize = 16;
	const fontSize = (width / baseWidth) * baseFontSize;

	return { width, height, fontSize };
};

const useDimensions = () => {
	const [dimensions, setDimensions] = useState(calculateDimensions());

	useEffect(() => {
		const handleResize = () => {
			setDimensions(calculateDimensions());
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return dimensions;
};

export default useDimensions;
