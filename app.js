const search = document.querySelector("#barraRicerca");
const button = document.querySelector("#link");

search.oninput = () => {
  button.href = `https://www.facebook.com/profile.php?id=${search.value}`;
};
