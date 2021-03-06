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
	'https://raw.github.com/drench/blowfish.js/master/blowfish.js',
	'https://raw.github.com/dpereira/masquerade/master/src/js/jmasq.js'
	];

// jquery must go first
bootstrap(modules);
setTimeout('jmasq_main();', 4000);
