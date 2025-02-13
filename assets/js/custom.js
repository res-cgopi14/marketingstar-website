/* On page scroll content animation */
AOS.init({
  duration: 1000,
});

/* Header Megamenu and responsive */
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

/* Footer navigation collapse in Mobile view */
$(function () {
  "use strict";
  $(".opennav").click(function () {
    var otherMenu = $(this).parent("li").find("ul.dropdown-menu");
    $("ul.dropdown-menu").not(otherMenu).hide("1000");
    $(this).parent("li").find("ul.dropdown-menu").slideToggle();

    var currentOpenNav = $(this);
    $(".opennav").not(currentOpenNav).removeClass("active");

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(".footer").find("[data-bs-toggle='collapse']").removeAttr("data-bs-toggle");
  if ($(window).width() < 960) {
    $(".footer").find(".taber").attr("data-bs-toggle", "collapse");
    $(".footer").find(".collapse").collapse("hide");
  }
});

/* Product and solution page Pricing Calculator */
$(document).ready(function () {
  $(".product-calc-tab .nav-link").on("click", function () {
    const targetImage = $(this).data("image");
    $(".product-calc-info ul").removeClass("active");
    $("#" + targetImage).addClass("active");
  });
});

/* Calculator price change */
$(document).ready(function () {
  $("[id$='-service']").on("change", function () {
    const selectedPrice = $(this).find(":selected").data("price");
    const displayId = $(this).attr("id").replace("-service", "-display");
    $("#" + displayId).text(selectedPrice);
  });
});

// Add an event listener to the input field to handle the 'Enter' key press for Get started
document.querySelectorAll(".subscribeEmailField").forEach((inputField) => {
  inputField.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          event.preventDefault();
          handleGetStarted(inputField);
      }
  });
});

document.querySelectorAll(".getStartedBtn").forEach((button) => {
  button.addEventListener("click", function () {
      const inputField = this.previousElementSibling;
      handleGetStarted(inputField);
  });
});

async function handleGetStarted(inputElement) {
  const subscribeEmailValue = inputElement?.value.trim();
  console.log("subscribeEmail: ", subscribeEmailValue);

  if (!subscribeEmailValue) {
      showError(inputElement, "Enter your email address");
      return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(subscribeEmailValue)) {
      inputElement.value = "";
      showError(inputElement, "Enter a valid email address");
      return;
  }

  console.log("subscribeemail", subscribeEmailValue);

  let formData = { emailId: subscribeEmailValue };

  fetch("https://paasgstg.marketingstar.us/Home/PartnerDataWithEmailID", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  .then((response) => response.json())
  .then((data) => {
      console.log("Success:", data);
      if (data) {
          setTimeout(() => {
              console.log("success call:");
              window.open("https://run.marketingstar.us/login?at=newuser&src=website", "_blank");
          }, 1000);
      }
  })
  .catch((error) => {
      console.error("Error:", error);
  });

}

function showError(inputElement, message) {
  inputElement.placeholder = message;
  inputElement.classList.add("error-email");

  setTimeout(() => {
      inputElement.classList.remove("error-email");
      inputElement.placeholder = "Enter your email";
  }, 1000);
}

