function jmasq_main() 
{
	var b = new Blowfish('cipher key');
	cipher_text = b.encrypt('plain text');
	cipher_plain = b.decrypt(cipher_text);
	$.modal("<div><h1>Result</h1><p>" + cipher_text + ' / ' + cipher_plain + "</p></div>");
}

