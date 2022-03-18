const titleDocument = document.querySelector('title'),
 tabButtons = document.querySelectorAll(".design-list__item"),
 tabDescriptions = document.querySelectorAll(".design__descr"),
 tabImages = document.querySelectorAll(".design-images");

const changeContent = (arr, val) => {
  arr.forEach(el => 
    el.dataset.tabsField === val ?
      el.classList.remove("hidden"):
      el.classList.add("hidden")
    );
}

tabButtons.forEach(tabButton => {
  tabButton.addEventListener("click", e => {
    const dataValue = tabButton.dataset.tabsHandler
    changeContent(tabDescriptions, dataValue)
    changeContent(tabImages, dataValue)

    tabButtons.forEach(btn => 
      btn === e.target? 
        btn.classList.add("design-list__item_active"):
        btn.classList.remove("design-list__item_active")  
    )
    titleDocument.innerHTML = e.target.innerHTML;
  });
});