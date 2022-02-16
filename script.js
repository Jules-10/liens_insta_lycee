function clipboard() {
	const text_to_copy = "insta.joliotcurie35@gmail.com"
	navigator.clipboard.writeText(text_to_copy);
	alert("adresse email copiée sans le presse-papier");
}