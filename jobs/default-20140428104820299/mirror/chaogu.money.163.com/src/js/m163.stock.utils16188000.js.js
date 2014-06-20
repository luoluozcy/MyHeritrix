(function(){
	m163.stock.utils = {};
	
	m163.stock.utils.priceSpan = function(price1, price2, sign) {

		sign = sign || false;
		price1 = parseFloat(price1).toFixed(2);
		price2 = parseFloat(price2).toFixed(2);
		
		$span = m163.stock.utils.priceSpanCreate(price1, price2, sign);
		return $span.append(price1);
	};
	
	m163.stock.utils.priceSpanCreate = function(price1, price2, sign) {
		sign = sign || false;
		price1 = parseFloat(price1);
		price2 = parseFloat(price2);
		
		var $span = $('<span/>');
		if (price1 > price2) {
			$span = $('<span/>', {
				'class' : 'f-Cred'
			});
			if(sign){
				$span.html("+");
			}
		} else if (price1 < price2) {
			$span = $('<span/>', {
				'class' : 'f-Cgreen'
			});
		}
		return $span;
	};
	
	m163.stock.utils.priceLabel = function(price1, price2, sign) {
		
		sign = sign || false;
		price1 = parseFloat(price1).toFixed(2);
		price2 = parseFloat(price2).toFixed(2);
		
		$span = m163.stock.utils.priceLabelCreate(price1, price2, sign);
		return $span.append(price1);
	};
	
	m163.stock.utils.priceLabelCreate = function(price1, price2, sign) {
		sign = sign || false;
		price1 = parseFloat(price1);
		price2 = parseFloat(price2);
		
		var $span = $('<label/>');
		if (price1 > price2) {
			$span = $('<label/>', {
				'class' : 'f-Cred'
			});
			if(sign){
				$span.html("+");
			}
		} else if (price1 < price2) {
			$span = $('<label/>', {
				'class' : 'f-Cgreen'
			});
		}
		return $span;
	};
})();