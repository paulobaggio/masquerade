function jmasq_main() 
{
	var b = new Blowfish('cipher key');
	cipher_text = b.encrypt('plain text');
	cipher_plain = b.decrypt(cipher_text);
	alert(cipher_text + " / " + cipher_plain);

	FB.ui(
	  {
		method: 'feed',
		name: 'Facebook Dialogs',
		link: 'https://developers.facebook.com/docs/reference/dialogs/',
		picture: 'http://fbrell.com/f8.jpg',
		caption: 'Reference Documentation',
		description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
	  },
	  function(response) {
		if (response && response.post_id) {
		  alert('Post was published.');
		} else {
		  alert('Post was not published.');
		}
	  }
	);
}

