const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".links");
const closeBtn = document.querySelector(".close-btn");
const eduBtn = document.querySelector("#edu-btn");
const workBtn = document.querySelector("#work");
const eduList = document.getElementById("edu-list");
const workList = document.getElementById("work-list");
menuBtn.addEventListener("click", () => {
  menuLinks.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menuLinks.classList.add("hidden");
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

eduBtn.addEventListener("click", () => {
  eduBtn.classList.add("qualification_active");
  workBtn.classList.remove("qualification_active");
  eduList.classList.remove("hidden");
  workList.classList.add("hidden");
});
workBtn.addEventListener("click", () => {
  workBtn.classList.add("qualification_active");
  eduBtn.classList.remove("qualification_active");
  workList.classList.remove("hidden");
  eduList.classList.add("hidden");
});

console.log(workBtn);

const skillsContent = document.getElementsByClassName("skill_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skill_content skills_close";
  }

  if (itemClass === "skill_content skills_close") {
    this.parentNode.className = "skill_content skills_open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// Get references to the necessary elements
const workNavigation = document.querySelector(".work__navigation");
const workNavigationItems = workNavigation.querySelectorAll(
  ".work__navigation-el"
);

const workList1 = document.querySelector(".work__list");
const workListItems = workList1.querySelectorAll(".work__list-el");

console.log(workNavigationItems);
// Add event listeners to each work navigation item
workNavigationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove the 'work__navigation-el--is-active' class from all items
    workNavigationItems.forEach((navItem) => {
      navItem.classList.remove("work__navigation-el--is-active");
    });

    // Add the 'work__navigation-el--is-active' class to the clicked item
    item.classList.add("work__navigation-el--is-active");

    // Remove the 'work__list-el--is-active' class from all items
    workListItems.forEach((listItem) => {
      listItem.classList.remove("work__list-el--is-active");
    });

    // Add the 'work__list-el--is-active' class to the corresponding list item
    workListItems[index].classList.add("work__list-el--is-active");
  });
});
