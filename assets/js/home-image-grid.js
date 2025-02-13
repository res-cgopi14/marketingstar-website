$(document).ready(function () {
  let row1Interval, row2Interval;

  function animateImages(rowId) {
      const isMobile = window.innerWidth <= 767; // Check for mobile view
      let containerWidth = 1320;
      let imageWidth = 270;
      let middleImageWidth = 197;
      let shrinkWidth = 55;
      let row = $(`#${rowId}`);
      let images = row.find(".anim-box");

      if (isMobile) {
          // For mobile, animate the width of one image to 60%, others to 20%
          let randomIndex = Math.floor(Math.random() * images.length);
          images.css("width", "20%");
          images.eq(randomIndex).css("width", "60%");
          images.find(".animText").css("opacity", 0); // Hide text for mobile
          images.eq(randomIndex).find(".animText").css("opacity", 1); // Show text for the active image
      } else {
          // For desktop, apply the original logic
          let totalGap = 15 * 2;
          let remainingWidth = containerWidth - middleImageWidth - shrinkWidth - totalGap;
          let otherImageWidth = remainingWidth / 2;

          images.each(function (index) {
              let imgContainer = $(this);
              if (index === 1) {
                  // Keep middle image at original size
                  imgContainer.css("width", `${middleImageWidth}px`);
                  imgContainer.find(".animText").css("opacity", 1); // Ensure text is visible
              } else {
                  imgContainer.css("width", `${(containerWidth - shrinkWidth - 15 * 2) / 2}px`);
                  imgContainer.find(".animText").css("opacity", 1); // Ensure text is visible
              }
          });

          let randomIndex = Math.random() < 0.5 ? 0 : 2;
          let shrunkenImage = images.eq(randomIndex);
          shrunkenImage.css("width", `${shrinkWidth}px`);
          shrunkenImage.find(".animText").css("opacity", 0); // Hide text when image shrinks

          // Reset all other images to original size with text shown
          images.not(shrunkenImage).each(function () {
              let imgContainer = $(this);
              if (imgContainer.index() !== 1) {
                  imgContainer.css("width", `${imageWidth}px`);
              }
              setTimeout(() => {
                  if (imgContainer.width() > 100) {
                      imgContainer.find(".animText").fadeIn(300); // Smoothly fade in text
                  }
              }, 500); // Small delay before showing text
          });
      }
  }

  row1Interval = setInterval(() => animateImages("row1"), 2000);
  row2Interval = setInterval(() => animateImages("row2"), 2000);

  $("#row1 .anim-box").hover(
      function () {
          clearInterval(row1Interval);
      },
      function () {
          row1Interval = setInterval(() => animateImages("row1"), 2000);
      }
  );

  $("#row2 .anim-box").hover(
      function () {
          clearInterval(row2Interval);
      },
      function () {
          row2Interval = setInterval(() => animateImages("row2"), 2000);
      }
  );

  // Adjust animation on window resize
  $(window).on("resize", function () {
      animateImages("row1");
      animateImages("row2");
  });

  // Initialize animation for both rows
  animateImages("row1");
  animateImages("row2");
});