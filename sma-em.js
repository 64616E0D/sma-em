var port = 9522;
var dgram = require('dgram');
var ref = require('ref');

var client = dgram.createSocket('udp4');

function toInt(buffer) {
	return parseInt(buffer.toString('hex'), 16);
}

client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
    client.setBroadcast(true)
    client.setMulticastTTL(128); 
    client.addMembership('239.12.255.254');
});

client.on('message', function (message, remote) {   
  //	console.log('Packet received from ' + remote.address + ':' + remote.port);
  //	message.type = ref.types.int;
    //console.log(parseInt(message.toString('hex', 20, 24), 16));

 	smaserial = toInt(message.slice(20, 24));	// done
	pregard = toInt(message.slice(32, 36))/10;	// done
	pregardcounter = toInt(message.slice(40, 48))/3600000;	//done
	psurplus = toInt(message.slice(52, 56))/10;	//done
	psurpluscounter = toInt(message.slice(60, 68))/3600000;	//done
	qregard = toInt(message.slice(72, 76))/10;	//done
	qregardcounter = toInt(message.slice(80, 88))/3600000;	//done
	qsurplus = toInt(message.slice(92, 96))/10;	//done
	qsurpluscounter = toInt(message.slice(100, 108))/3600000;	//done
	sregard = toInt(message.slice(112, 116))/10;	//done
	sregardcounter = toInt(message.slice(120, 128))/3600000;	//done
	ssurplus = toInt(message.slice(132, 136))/10;	//done
	ssurpluscounter = toInt(message.slice(140, 148))/3600000;	//done
	cosphi = toInt(message.slice(152, 156))/1000;	//done
	// L1
	p1regard = toInt(message.slice(160, 164))/10;
	p1regardcounter = toInt(message.slice(168, 176))/3600000;
	p1surplus = toInt(message.slice(180, 184))/10;
	p1surpluscounter = toInt(message.slice(188, 196))/3600000;
	q1regard = toInt(message.slice(200, 204))/10;
	q1regardcounter = toInt(message.slice(208, 216))/3600000;
	q1surplus = toInt(message.slice(220, 224))/10;
	q1surpluscounter = toInt(message.slice(228, 236))/3600000;
	s1regard = toInt(message.slice(240, 244))/10;
	s1regardcounter = toInt(message.slice(248, 256))/3600000;
	s1surplus = toInt(message.slice(260, 264))/10;
	s1surpluscounter = toInt(message.slice(268, 276))/3600000;
	thd1 = toInt(message.slice(280, 284))/1000;
	v1 = toInt(message.slice(288, 292))/1000;
	cosphi1 = toInt(message.slice(296, 300))/1000;
	// L2
/**	p2regard = toInt(message.slice(608, 616))/10;
	p2regardcounter = toInt(message.slice(624, 640))/3600000;
	p2surplus = toInt(message.slice(648, 656))/10;
	p2surpluscounter = toInt(message.slice(664, 680))/3600000;
	q2regard = toInt(message.slice(688, 696))/10;
	q2regardcounter = toInt(message.slice(704, 720))/3600000;
	q2surplus = toInt(message.slice(728, 736))/10;
	q2surpluscounter = toInt(message.slice(744, 760))/3600000;
	s2regard = toInt(message.slice(768, 776))/10;
	s2regardcounter = toInt(message.slice(784, 800))/3600000;
	s2surplus = toInt(message.slice(808, 816))/10;
	s2surpluscounter = toInt(message.slice(824, 840))/3600000;
	thd2 = toInt(message.slice(848, 856))/1000;
	v2 = toInt(message.slice(864, 872))/1000;
	cosphi2 = toInt(message.slice(880, 888))/1000;
	// L3
	p3regard = toInt(message.slice(896, 904))/10;
	p3regardcounter = toInt(message.slice(912, 928))/3600000;
	p3surplus = toInt(message.slice(936, 944))/10;
	p3surpluscounter = toInt(message.slice(952, 968))/3600000;
	q3regard = toInt(message.slice(976, 984))/10;
	q3regardcounter = toInt(message.slice(992, 1008))/3600000;
	q3surplus = toInt(message.slice(1016, 1024))/10;
	q3surpluscounter = toInt(message.slice(1032, 1048))/3600000;
	s3regard = toInt(message.slice(1056, 1064))/10;
	s3regardcounter = toInt(message.slice(1072, 1088))/3600000;
	s3surplus = toInt(message.slice(1096, 1104))/10;
	s3surpluscounter = toInt(message.slice(1112, 1128))/3600000;
	thd3 = toInt(message.slice(1136, 1144))/1000;
	v3 = toInt(message.slice(1152, 1160))/1000;
	cosphi3 = toInt(message.slice(1168, 1176))/1000; **/

	// Returning values
	data = {'serial':smaserial,'pregard':pregard,'pregardcounter':pregardcounter,'psurplus':psurplus,'psurpluscounter':psurpluscounter,
	'sregard':sregard,'sregardcounter':sregardcounter,'ssurplus':ssurplus,'ssurpluscounter':ssurpluscounter, 
	'qregard':qregard,'qregardcounter':qregardcounter,'qsurplus':qsurplus,'qsurpluscounter':qsurpluscounter,
	'cosphi':cosphi,
	'p1regard':p1regard,'p1regardcounter':p1regardcounter,'p1surplus':p1surplus,'p1surpluscounter':p1surpluscounter,
	's1regard':s1regard,'s1regardcounter':s1regardcounter,'s1surplus':s1surplus,'s1surpluscounter':s1surpluscounter,
	'q1regard':q1regard,'q1regardcounter':q1regardcounter,'q1surplus':q1surplus,'q1surpluscounter':q1surpluscounter,
	'v1':v1,'thd1':thd1,'cosphi1':cosphi1 };
/**	'p2regard':p2regard,'p2regardcounter':p2regardcounter,'p2surplus':p2surplus,'p2surpluscounter':p2surpluscounter,
	's2regard':s2regard,'s2regardcounter':s2regardcounter,'s2surplus':s2surplus,'s2surpluscounter':s2surpluscounter,
	'q2regard':q2regard,'q2regardcounter':q2regardcounter,'q2surplus':q2surplus,'q2surpluscounter':q2surpluscounter,
	'v2':v2,'thd2':thd2,'cosphi2':cosphi2,
	'p3regard':p3regard,'p3regardcounter':p3regardcounter,'p3surplus':p3surplus,'p3surpluscounter':p3surpluscounter,
	's3regard':s3regard,'s3regardcounter':s3regardcounter,'s3surplus':s3surplus,'s3surpluscounter':s3surpluscounter,
	'q3regard':q3regard,'q3regardcounter':q3regardcounter,'q3surplus':q3surplus,'q3surpluscounter':q3surpluscounter,
	'v3':v3,'thd3':thd3,'cosphi3':cosphi3 }; **/
 console.log(JSON.stringify(data));

});

client.bind(port);
