/**
 * Loads a list of jscript files into the current document context.
 * @param modules a list of filenames/urls where the modules can be found.
 */
function bootstrap(modules)
{
   for(var m in modules) {
      mscript=document.createElement('script');
	  mscript.src=modules[m];
      document.body.appendChild(mscript);
   }
}

var modules = [
	'http://code.jquery.com/jquery-1.7.1.min.js',
	'http://simplemodal.googlecode.com/files/jquery.simplemodal.1.4.2.min.js',
	'https://raw.github.com/drench/blowfish.js/master/blowfish.js',
	'https://raw.github.com/dpereira/masquerade/master/src/js/jmasq.js'
	];

bootstrap(modules);
setTimeout('jmasq_main();', 4000);
