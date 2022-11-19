jQuery(document).ready(function ($) {
  setInterval(function () {
    moveRight();
  }, 10000);

  var slideCount = $(
    "main section.reviews div.reviews ul.testimonials li.testimonial"
  ).length;
  var slideWidth = $(
    "main section.reviews div.reviews ul.testimonials li.testimonial"
  ).width();
  var slideHeight = $(
    "main section.reviews div.reviews ul.testimonials li.testimonial"
  ).height();

  var sliderUlWidth = slideCount * slideWidth;

  $("main section.reviews div.reviews").css({
    width: slideWidth,
    height: slideHeight
  });

  $("main section.reviews div.reviews ul.testimonials").css({
    width: sliderUlWidth,
    marginLeft: -slideWidth
  });

  $("main section.reviews div.reviews ul.testimonials li:last-child").prependTo(
    "main section.reviews div.reviews ul.testimonialsl"
  );

  function moveLeft() {
    $("main section.reviews div.reviews ul.testimonials").animate(
      {
        left: +slideWidth
      },
      200,
      function () {
        $(
          "main section.reviews div.reviews ul.testimonials li.testimonial:last-child"
        ).prependTo("main section.reviews div.reviews ul.testimonials");
        $("main section.reviews div.reviews ul.testimonials").css("left", "");
      }
    );
  }

  function moveRight() {
    $("main section.reviews div.reviews ul.testimonials").animate(
      {
        left: -slideWidth
      },
      200,
      function () {
        $(
          "main section.reviews div.reviews ul.testimonials li.testimonial:first-child"
        ).appendTo("main section.reviews div.reviews ul.testimonials");
        $("main section.reviews div.reviews ul.testimonials").css("left", "");
      }
    );
  }

  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });

  $(function () {
    var requiredCheckboxes = $(
      "main section.contactForm form.contactForm div.checkboxes input:checkbox[required]"
    );
    requiredCheckboxes.change(function () {
      if (requiredCheckboxes.is(":checked")) {
        requiredCheckboxes.removeAttr("required");
      } else {
        requiredCheckboxes.attr("required", "required");
      }
    });
  });
});
