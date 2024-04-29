import {icons} from './components/icons';

const addedIconsToMenu = () => {
    const menu = document.querySelectorAll(".o_shop_collapse_category")[0]
      .children[0];
    const menuMobile = document.querySelectorAll(".o_shop_collapse_category")[1]
    .children[0];
    const mapMenu = menu.children;
  const mapMenuMobile = menuMobile.children;
  const mapMenus = [mapMenu,mapMenuMobile];  
  mapMenus.forEach((menuParam) => {
    Array.from(menuParam).forEach((e, index) => {
      if (index < 1) {
        null;
      } else {
        const temp = document.createElement("div");
        if (icons[index -1]){
        temp.innerHTML = icons[index - 1];
        const firstElement = e.children[0].firstChild;
        if (!e.children[0].classList.contains("accordion-header")) {
          e.children[0].style.setProperty(
            "justify-content",
            "flex-start",
            "important"
          );
          e.children[0].style.setProperty("flex-wrap", "nowrap", "important");
          e.children[0].style.setProperty(
            "align-items",
            "flex-start",
            "important"
          );
        }
        e.children[0].insertBefore(temp, firstElement);
        e.style.display = "block";
      }else{
        e.style.display = "none";
      }
      
      }
    });
  })
  
  };

 export default {
addedIconsToMenu
  }