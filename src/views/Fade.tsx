import homeScreenshot from '/home2.jpg';

import Console from '../console/Console';

function Fade() {
	return (
		<>
			<div className="absolute left-0 top-0 z-10 size-full opacity-50">
				<Console />
			</div>
			<div className="absolute left-0 top-0 size-full opacity-30">
				<img src={homeScreenshot} className="size-full object-contain" draggable="false" />
			</div>
		</>
	);
}

export default Fade;
