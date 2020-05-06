window.addEventListener('resize', resizeWindow);
	resizeWindow();
    
function resizeWindow()
	{
  		document.querySelector('#width').innerText = document.documentElement.clientWidth;
		document.querySelector('#height').innerText = document.documentElement.clientHeight;
	}
