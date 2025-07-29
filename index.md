---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: "Home-Start Nottingham"
layout: default

carousel:
  - heading: "Because childhood cannot wait"
    body: "The earliest years make the biggest difference. Home-Start makes sure those years count, so no child's future is limited.<br><br>Donate here to support Home-Start Nottingham"
    linkText: "Donate"
    link: "https://www.justgiving.com/homestartnottingham"
    image: "assets/uploads/img/hs4.jpg"

  - heading: "How to volunteer"
    body: "Find out how to volunteer for Home-Start Nottingham, whether you want to be a home visiting volunteer, a trustee, or a fundraiser."
    linkText: "Read More"
    link: "./volunteers/howToVolunteer.html"
    image: "assets/uploads/img/hs_6_small3.jpg"

  - heading: "How can we support you"
    body: "Being a parent has never been easy. It can be lonely, frustrating, heartbreaking and overwhelming. All parents struggle at one time or another. For some, the challenges can be greater. You are not alone."
    linkText: "Read More"
    link: "./parents/howCanWeSupport.html"
    image: "assets/uploads/img/hs2.jpg"

features:
  - statistic: "83"
    description: "families supported last year"
    image: "/assets/svg/smile.svg"
  - statistic: "10,686"
    description: "volunteer hours given to support families last year"
    image: "/assets/svg/arrows.svg"
  - statistic: "89% of parents"
    description: "had support with mental health"
    image: "/assets/svg/circles.svg"
intro: "We're there for parents when they need us the most, because childhood can't wait"
---

{% include carousel.html %}
{% include intro.html %}
{% include features.html %}
