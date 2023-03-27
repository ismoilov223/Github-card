// start the Dom elements!
const theme_change = document.querySelector("#theme_change");
const serchInpEl = document.querySelector("#serch_inp");
const serchBtnEl = document.querySelector("#serch_btn");
const theme_text = document.querySelector("#theme_text");
const theme_icon = document.querySelector("#theme_icon");
const user_name = document.querySelector("#user_name");
const user_date_add = document.querySelector("#user_date_add");
const user_bio = document.querySelector("#user_bio");
const user_repostr = document.querySelector("#user_repostr");
const user_followers = document.querySelector("#user_followers");
const user_following = document.querySelector("#user_following");
const user_github_avt = document.querySelector("#github_avt");
// end the Dom elements!
theme_change.addEventListener("click", () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.setAttribute("color-theme", "light");
  if (theme_change.classList == "light") {
    theme_change.classList.remove("light");
    theme_change.classList.add("dark");
    document.documentElement.classList.add("dark");
    theme_text.textContent = "LIGHT";
    theme_icon.src = "../images/svg/sun.svg";
  } else {
    theme_change.classList.remove("dark");
    theme_change.classList.add("light");
    document.documentElement.classList.remove("dark");
    theme_text.textContent = "DARK";
    theme_icon.src = "../images/svg/moon-icon.svg";
  }
});
serchBtnEl.addEventListener("click", () => {
  let serchVal = serchInpEl.value;
  if (serchVal != "" && serchVal != " ") {
    getTodos(serchVal);
    async function getTodos(serchval) {
      try {
        const res = await fetch(`https://api.github.com/users/${serchval}`);
        const data = await res.json();
        user_name.textContent = data.login;
        user_date_add.textContent = data.created_at;
        user_bio.textContent = data.bio;
        user_repostr.textContent = data.public_repos;
        user_followers.textContent = data.followers;
        user_following.textContent = data.following;
        user_github_avt.src = data.avatar_url;
        serchInpEl.value = "";
        console.log(data);
      } catch (error) {
        alert(error);
        serchInpEl.value = "";
      }
    }
  } else {
    alert("Foydalanuvchi nomini kiritng!");
  }
});
