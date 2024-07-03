import { useEffect } from 'react';

import Console from './console/Console';
import Fade from './views/Fade';
import Slider from './views/Slider';

function App() {
	const clicked = () => {
		const elem = document.documentElement;

		if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) { // Firefox
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) { // IE/Edge
				document.msExitFullscreen();
			}
		} else {
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) { // Firefox
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { // IE/Edge
				elem.msRequestFullscreen();
			}
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', function (e) {
			if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
				e.preventDefault();
			}
		}, false);

		window.addEventListener('scroll', (event) => {
			if (window.scrollX !== 0) {
				window.scrollTo(0, window.scrollY);
			}
		});
	}, []);

	return (
		<div className="h-screen w-screen" onDoubleClick={clicked}>
			<Console />
		</div>
	);
}

export default App;
