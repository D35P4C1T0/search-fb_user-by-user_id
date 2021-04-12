const search = document.querySelector("#searchTerm");
const button = document.querySelector("#link");

search.oninput = () => {
  button.href = `https://www.facebook.com/profile.php?id=${search.value}`;
};