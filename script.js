	function volume_sphere() {
	    //Write your code here
		let radius = document.getElementById("radius")
    let volume = document.getElementById("volume")

    let r1 = Number(radius.value)

    if (isNaN(r1) || r1 < 0) {
        volume.value = "NaN"
    } else {
        let v1 = (4 / 3) * Math.PI * r1 * r1 * r1
        volume.value = v1.toFixed(4)
    }

    return false
	  
	} 
	
	window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
