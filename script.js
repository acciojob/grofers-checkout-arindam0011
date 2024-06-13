const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let table= document.querySelector('table');
	let total=table.querySelectorAll('.price');
 let totalSum=0;
	for(let t of total){
		totalSum+=parseInt(t.innerText);
	}
  let newTotal= document.createElement("div");

newTotal.innerHTML=`<p>${totalSum}</p>`

document.body.appendChild(newTotal);
};

getSumBtn.addEventListener("click", getSum);

