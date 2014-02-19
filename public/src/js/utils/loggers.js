// LOGGING
function trace() {
	if (typeof console === "undefined" || typeof console.log === "undefined") {
		console = { log:function(){} };
	} else {
		Utils.each(arguments,
			function(a) {
				console.log(a);
			},
			this
		);
	}
}
