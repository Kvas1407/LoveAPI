document.addEventListener("DOMContentLoaded", function () {
    console.log("Ready!");

	let fname = document.querySelector(`#fname`)
	let sname = document.querySelector(`#sname`)
	const percent = document.querySelector(`#percent`)
	const percentage= document.querySelector(`.percentageResult`)
	const textResult= document.querySelector(`.textResult`)
	
	percent.addEventListener('click', (event)=>{
         event.preventDefault();
		if(fname.value && sname) {
			getMatchName(fname.value, sname.value);
			
			formData.reset()

		}
	})
    function getMatchName(n1, n2) {
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${n1}&sname=${n2}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d2bba620f0msh156a97dadf6af43p1b1230jsn3a9041c3da07",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	
	console.log(response);
 percentage.innerHTML=`<p>Percentage: ${response.percentage} %</p>`;
 textResult.innerHTML= `<p>Your Result is: ${response.result} !! </p>`;
 //getResult.innerHTML= response.fname, response.sname, response.percentage
})
.catch(err => {
	console.error(err);
});
    }
       
//getMatchName();
});