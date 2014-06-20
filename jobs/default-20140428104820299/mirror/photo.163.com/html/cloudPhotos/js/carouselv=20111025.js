(function(){
	function Carousel(list, index){
		this._list = list;
		this._index = 0;
	}
	
	Carousel.prototype = {
		go: function(index){
			var list;
			if(index === this._index){
				return;
			}
			list = this._list;
			if(index > list.length - 1){
				index = 0;
			}
			hide(list[this._index]);
			show(list[this._index = index]);
		},
		
		next: function(){
			this.go(this._index + 1);
		},
		
		prev: function(){
			this.go(this._index - 1);
		}
		
	}
	
	function show(elem){
		elem.style.display = '';
	}
	
	function hide(elem){
		elem.style.display = 'none';
	}
	
	window.Carousel = Carousel;
})();

(function(){
	var doc = document, 
			$$ = E._$getChildElements;
			
	var temp = $$('carousel'),
			i = 0, l, index = 0, timer;

	var dotList = $$(temp[1]);
			
	var carousel = new Carousel($$(temp[0]));
	
	for(l = dotList.length; i < l; i++){
		dotList[i].onmouseover = onMouseOver;
		dotList[i].onmouseout = onMouseOut;
		dotList[i].index = i;
	}
	
	function timeTick(){
		if(timer){
			clearTimeout(timer);
			change(index + 1);
		}
		timer = setTimeout(timeTick, 5000);
	}
	
	function onMouseOver(){
		if(index !== this.index){
			change(this.index);
			clearTimeout(timer);
			timer = null;
		}
	}
	
	function onMouseOut(){
		timeTick();
	}
	
	function change(nextIndex){
		if(nextIndex > l - 1){
			nextIndex = 0;
		}
		dotList[index].className = '';
		dotList[nextIndex].className = 'selected';
		carousel.go(index = nextIndex);
	}
	
	timeTick();
})();
