function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickOnDeals() { 
  await sleep(2000); 
  var i = 0;
  // Sleep in loop
  while($('button:contains("CLIP")').length > 0) {  
	clickDeal($('button:contains("CLIP")').length, i)
	await sleep(2000);
    console.log(i);
	i++;
  }
}

  
function clickDeal(couponCount, i) { 
	var index = Math.floor(Math.random() * couponCount); 
	var coupon = $('#innerScrollTop > div > span')[index]
	product = $(coupon).find('p.date.paddin-top-text.pr-lg-2')[0].innerText;
	$(coupon).find('button.btn.red-btn.widthHeight')[0].click() ;
	console.log('clipping coupon for :' + product);  
} 

