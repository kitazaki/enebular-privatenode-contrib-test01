module.exports = function(RED) {
	function test01(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		node.on('input', async function(msg) {
			const mes = msg.payload;
		        msg.payload = 'enebularサイコー';
            		node.send(msg);
        	});
    	}
	RED.nodes.registerType('test01', test01);
}
