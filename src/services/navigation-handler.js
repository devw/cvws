const get_url = (par) =>
    "https://raw.githubusercontent.com/francescaervas/francescaervas.github.io/master/data/" +
    par +
    ".txt";

export const changeArticle = function (title) {
    const fn = title.toLocaleLowerCase().replace(/ /g, "-") + ".md";
    fetch(fn, { cache: "reload" })
        .then((md) => md.text())
        .then((resp) => {
            this.setState({ article: resp });
            this.setState({ title: title });
        });
};
