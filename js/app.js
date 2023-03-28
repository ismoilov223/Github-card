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
const user_location = document.querySelector("#user_location");
const user_twit = document.querySelector("#user_twit");
const user_blog = document.querySelector("#user_blog");
const user_company = document.querySelector("#user_company");
const user_link = document.querySelector("#user_link");
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
        user_link.textContent = data.html_url;
        if (data.location) {
          user_location.textContent = data.location;
        } else {
          user_location.textContent = "Not Available";
        }
        if (data.blog) {
          user_blog.textContent = data.blog;
        } else {
          user_blog.textContent = "Not Available";
        }
        if (data.twitter_username) {
          user_twit.textContent = data.twitter_username;
        } else {
          user_twit.textContent = "Not Available";
        }
        if (data.company) {
          user_company.textContent = data.company;
        } else {
          user_company.textContent = "Not Available";
        }
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
