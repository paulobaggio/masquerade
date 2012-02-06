function jmasq_main() 
{
	var b = new Blowfish('cipher key');
	cipher_text = b.encrypt('plain text');
	cipher_plain = b.decrypt(cipher_text);
	alert(cipher_text + " / " + cipher_plain);
}

