require.config({

	// 设置别名（虚拟路径）
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
	},

	shim:{

		// 设置依赖
		//zoom依赖jquery
		// 'zoom':['jquery']

		// 'common':['jquery']
		'zoom':{
		     deps: ["jquery"],//设置依赖
		     exports:'jQuery.prototype.gdsZoom'
		}

	}
	
});
