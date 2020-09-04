const get_url = (par) =>
    "https://raw.githubusercontent.com/francescaervas/francescaervas.github.io/master/data/" +
    par +
    ".txt";

const modifyText = (e) => {
    document.querySelector("#heder").innerHTML = e.target.innerHTML;
    fetch(get_url(e.target.id), { cache: "reload" })
        .then((x) => x.text())
        .then((y) => {
            document.querySelector("#main").innerHTML = nl2br(y);
        });
};
