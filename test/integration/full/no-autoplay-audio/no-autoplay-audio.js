describe('no-autoplay-audtip test pass', function() {
	'use strict';
	var results;

	before(function(done) {
		// Stop messing with my tests Mocha!
		var heading = document.querySelector('#mocha h1');
		if (heading) {
			heading.outerHTML = '<h2>no-autoplay-audio test</h2>';
		}

		axe.run(
			{
				debug: true,
				runOnly: {
					type: 'rule',
					values: ['no-autoplay-audio']
				}
			},
			function(err, r) {
				assert.isNull(err);
				results = r;
				done();
			}
		);
	});

	describe('passes', function() {
		it('should find 1', function() {
			assert.lengthOf(results.passes[0].nodes, 1);
		});
	});
});
