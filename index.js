var OSinfo = require('./modules/OSInfo');
var toHHMMss = require('./modules/secToTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
			case '/getOSinfo':
				OSinfo.print();
				break;
            default:
				if (isNaN(input)) {
					process.stderr.write('Wrong process name or number!\n');
				} else {
					process.stdout.write(toHHMMss.toHHMMss(input) +'\n');
				};
				break;
        };
    }
});
 