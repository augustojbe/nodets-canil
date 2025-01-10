type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

export const creatMenuObject = (activeMenu: MenuOptions) => {
  let returObjective = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== "") {
    returObjective[activeMenu] = true;
  }

  return returObjective;
};
