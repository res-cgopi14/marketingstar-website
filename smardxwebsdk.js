document.addEventListener("DOMContentLoaded", () => {
	console.log("Resulconfig Loaded SuccessFully",window.location.pathname)
	let ele = document.querySelectorAll("script[src$=sdk]");
	if (ele.length) {
	  ele.forEach((item) => {
		item.remove();
	  });
	}
	let script = document.createElement("script");
	script.setAttribute("defer", "defer");
	script.setAttribute("fcm_service_path", "firebase-messaging-sw.js");
	script.src ="https://sdk.resul.io/handlers/f464547cd0b14ef7a91ca0c5cbc88b2e.sdk";	
	document.head.appendChild(script);
  });