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
	script.src ="https://sdk.smartdx.co/handlers/fc8bd0d7e5ab4abcb6c9aa5174ca9961.sdk";	
	document.head.appendChild(script);
  });