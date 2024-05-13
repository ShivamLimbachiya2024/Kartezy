const fillRate = (node) => {
  const rates = ['reviewRate1', 'reviewRate2', 'reviewRate3', 'reviewRate4', 'reviewRate5']
  let flag=true;
  rates.forEach(rate=>{
    rate = document.getElementById(rate);
    if(flag == true || rate.id == node.id){
      rate.className = 'bi bi-star-fill fs-2 m-2 rate';
      flag = rate.id==node.id?false:true
    }
    else{
      rate.className = 'bi bi-star fs-2 m-2 rate';
    }
  })
}