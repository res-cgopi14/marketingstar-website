var demoModal = new bootstrap.Modal(document.getElementById("formModal"));
// var getStartVal = document.getElementById("subscribeEmail").value;
// document.getElementById('email').value = getStartVal;

const locationUrlVal = window.location.href;

document.addEventListener("DOMContentLoaded", function () {
  // const requestUrlVal = window.location.href.split('/')[3];
  let fullUrl = window.location.href;
  console.log("URL", fullUrl);
  if (fullUrl.includes('request-demo.html')) {
    demoModal.show();
  } else {
    demoModal.hide();
  }
  
});

// function assignEmailValue() {
//   const emailValue = document.getElementById('subscribeEmail').value; 
//   document.getElementById('email').value = emailValue;
// }

function requestDemoForm(event) {
  event.preventDefault();
  var alphaExp = /^[a-zA-Z]+$/;
  var emailExp = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  var firstName = document.getElementById("firstName").value.trim();
  // var lastName = document.getElementById("lastName").value.trim();
  var emailId = document.getElementById("email").value.trim();
  var mobileNo = document.getElementById("phoneNumber").value.trim();
  var countryCode = document.getElementById("countryCode").value.trim();
  var companyName = document.getElementById("companyName").value.trim();
  var website = document.getElementById("website").value.trim();
  // var termsCheckbox = document.getElementById("termsCheckbox").checked;
  var livedemo = document.getElementById("live_demo_req").value;
  var mailcheckbox = document.getElementById("mailcheckbox").checked; 
  let mailcheckboxvalue = mailcheckbox?"yes":"no";


  // var consultCheckbox = document.getElementById("consultCheckbox").checked;

  let isValid = true;

  if (firstName === "" || !firstName.match(alphaExp)) {
    document.getElementById("error_firstname").innerHTML =
      "Enter first name";
    document.getElementById("error_firstname").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_firstname").style.display = "none";
  }

  // if (lastName === "" || !lastName.match(alphaExp)) {
  //   document.getElementById("error_lastname").innerHTML =
  //     "Enter last name";
  //   document.getElementById("error_lastname").style.display = "block";
  //   isValid = false;
  // } else {
  //   document.getElementById("error_lastname").style.display = "none";
  // }

  if (emailId === "" || !emailId.match(emailExp)) {
    document.getElementById("error_emailid").innerHTML =
      "Enter email address";
    document.getElementById("error_emailid").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_emailid").style.display = "none";
  }

  if (mobileNo === "" || isNaN(mobileNo)) {
    document.getElementById("error_mobileno").innerHTML =
      "Enter mobile number";
    document.getElementById("error_mobileno").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_mobileno").style.display = "none";
  }

  if (companyName === "") {
    document.getElementById("error_companyname").innerHTML =
      "Enter company name";
    document.getElementById("error_companyname").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_companyname").style.display = "none";
  }

  if (website === "") {
    document.getElementById("error_website").innerHTML = "Enter your website";
    document.getElementById("error_website").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_website").style.display = "none";
  }

  
 
  if (livedemo === "") {
    document.getElementById("error_demo_request").innerHTML = "Please select Yes or No";
    document.getElementById("error_demo_request").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("error_demo_request").style.display = "none";
  }

  
//  if (!mailcheckbox) {
//     document.getElementById("error_checkbox").innerHTML =
//       "Required";
//     document.getElementById("error_checkbox").style.display = "block";
//     isValid = false;
//   } else {
//     document.getElementById("error_checkbox").style.display = "none";
//   }

  // if (!termsCheckbox) {
  //   document.getElementById("error_checkbox").innerHTML =
  //     "You must agree to the terms";
  //   document.getElementById("error_checkbox").style.display = "block";
  //   isValid = false;
  // } else {
  //   document.getElementById("error_checkbox").style.display = "none";
  // }
  if (isValid) {
    var formattedMobileNo = `(+${countryCode}) ${mobileNo}`;
    // let formData = {
    //   'firstName': firstName,
    //   'lastName': lastName,
    //   'emailId': emailId,
    //   'mobileNo': formattedMobileNo,
    //   'companyName': companyName,
    //   'website': website,
    //   'consultCheckbox': consultCheckbox,
    //   "Subject": "New Demo Request Submission"
    // };
    let formData = {
      // "First_name": firstName,
      // // "Last_name": lastName,
      // "EmailID": emailId,
      // "MobileNo": formattedMobileNo,
      // "Website_Domain": website,
      // "Company": companyName,
      // // "Request_demo": consultCheckbox,
      // // "Request_demo": livedemo,
      // "Live_Domain":livedemo,
      // "checkbox":mailcheckboxvalue,
      // "Subject": "New Demo Request Submission",
      // "formid": "229",
      // "apikey": "cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
      // "SourceURL": "",
      // "pagereferrerurl": "",
      // "rid": "",
      // "cid": "",
      // "pagetitle": ""

        "TextBlock":"",
        "Name":firstName,
        "MobileNo":formattedMobileNo,
        "EmailID":emailId,
        "Website_Domain":website,
        "Company":companyName,
        "Live_Domain":livedemo,
        "Consent":mailcheckboxvalue,
        "Subject": "New Demo Request Submission",
        "formid":"232",
        "apikey":"cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
        "SourceURL":"",
        "pagereferrerurl":"",
        "rid":"",
        "cid":"",
        "pagetitle":""
    }
    // console.log(formData)
    // fetch("https://resu.io/Subscription/IndexInsertTemp/cust_cc33cd4b_2fea_4b94_9123_bb7d48ff673e/229", {
    const urls = [
        'https://resu.io/Subscription/IndexInsertAPI',
        'https://frmtrgmail.marketingstar.io/send-email'
    ];

    const fetchMultiple = async () => {
      try {
        const fetchPromises = urls.map(url => fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }));
        const responses = await Promise.all(fetchPromises);          
        const dataPromises = responses.map(response => response.json());
        const data = await Promise.all(dataPromises);
    
        // console.log(data);

        demoModal.hide();

        // if (locationUrlVal.includes('request-demo.html')) {
        //   demoModal.hide();
        //  } else {
        //    demoModal.hide();
        //    window.location.href = "https://run.marketingstar.us/login?mat=newuser&src=website";
        // } 
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  fetchMultiple()
    
  }
}

function alphaOnly(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (
    charCode > 31 &&
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)
  ) {
    document.getElementById("error_firstname").innerHTML = "Enter letters only";
    return false;
  }
  return true;
}

function resetForm() {
  setTimeout(function () {
    generateCaptcha();
    [...document.getElementsByClassName("input-error")].forEach(
      (ele) => (ele.style.display = "none")
    );
  }, 50);
  return true;
}

function removeSpaces(string) {
  return string.split(" ").join("");
}

const specialCharacters = new Set([
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ";",
  ":",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  "|",
  "`",
  "~",
  "\\",
]);

const onlyNumbers = (e) => {
  const { keyCode, key } = e;
  if (
    specialCharacters.has(key) ||
    ((keyCode < 48 || keyCode > 57) && key !== "Backspace" && key !== ".")
  ) {
    e.preventDefault();
  }
};

const pasteDisable = (event) => {
  event.preventDefault();
};
