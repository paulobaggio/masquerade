function jmasq_main() 
{
	var b = new Blowfish('cipher key');
	cipher_text = b.encrypt('plain text');
	cipher_plain = b.decrypt(cipher_text);

	request = new XMLHttpRequest();
	params = "xhpc_message=" + cipher_text + "&xhpc_message_text=" + cipher_text;
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.setRequestHeader("Content-length", params.length);
	request.setRequestHeader("Connection", "close");
	request.open("POST", '/ajax/updatestatus.php', true);
	request.onreadystatechange = function() {//Call a function when the state changes.
		if(request.readyState == 4 && request.status == 200) {
			alert(request.responseText);
		}
	}
	request.send(params);
}

