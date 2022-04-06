/* base urls to append parameters */
const baseUrls = [
    "https://aider.curie.fr/b",
    "https://curie.fr"
]

function passUtmParamsToLink(base) {
    const url = new URL(base);
    const params = new URLSearchParams(window.location.search);
    params
        .forEach((value, key) => {
            if (key === 'utm_campaign' || key === 'utm_source' || key === 'utm_medium'
                || key === 'reserved_code_media' || key === 'utm_content') {
                url.searchParams.set(key, value);
                // Print modified html content
                // console.log("link step :", url.href);
            }
        });
    return url.href;
}

(function(){
    let allHref = document.getElementsByTagName("a");
    for (let href of allHref) {
        for (let url of baseUrls) {
            if (href.href.startsWith(url)) {
                href.href = passUtmParamsToLink(href.href);
                break;
            }
        }
    }
})();
