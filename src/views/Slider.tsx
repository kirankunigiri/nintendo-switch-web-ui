import { ReactCompareSlider } from 'react-compare-slider';

import homeScreenshot from '/home2.jpg';

import Console from '../console/Console';

function Slider() {
	return (
		<div className="h-screen w-screen">
			<ReactCompareSlider
				className="size-full"

				itemOne={(
					<Console />
				)}
				itemTwo={(
					<div className="size-full">
						<img src={homeScreenshot} className="size-full object-contain" />
					</div>
				)}
			/>
		</div>
	);
}

export default Slider;
