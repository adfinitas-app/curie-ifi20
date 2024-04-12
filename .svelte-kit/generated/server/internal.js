
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t<script id=\"CookieDeclaration\" src=\"https://consent.cookiebot.com/984ff711-9bb2-48fd-a0b0-402e8e7d1aa4/cd.js\" type=\"text/javascript\" async></script>\n\n\t\tPour que le JS se charge bien si l'internaute n'accepte pas les cookies :\n\t\t<script data-cookieconsent=\"ignore\"></script>\n\n\t\tScript qui correspond à la fonction qu'il faut appeler pour déclanger la popup quand on clique sur Gestions des cookies :\n\t\t<a class=\"underlineHover\" href=\"javascript:Cookiebot.show()\" style=\"cursor: pointer\">GESTION DES COOKIES</a>\n\t\t<!-- Primary Meta Tags -->\n\t\t<title>Ouvrez de nouvelles perspectives de guérison aux patients</title>\n\t\t<meta name=\"title\" content=\"Ouvrez de nouvelles perspectives de guérison aux patients\" />\n\t\t<meta name=\"description\" content=\"Contre le cancer, investissez votre impôt dans l’innovation\" />\n\n\t\t<!-- Open Graph / Facebook -->\n\t\t<meta property=\"og:type\" content=\"website\" />\n\t\t<meta property=\"og:url\" content=\"https://ifi.curie.fr\" />\n\t\t<meta property=\"og:title\" content=\"Ouvrez de nouvelles perspectives de guérison aux patients\" />\n\t\t<meta property=\"og:description\" content=\"Contre le cancer, investissez votre impôt dans l’innovation\" />\n\t\t<meta property=\"og:image\" content=\"/curie-gtm-img.png\" />\n\n\t\t<!-- Twitter -->\n\t\t<meta property=\"twitter:card\" content=\"Votre don ouvre de nouvelles perspectives de guérison aux patients. Contre le cancer, investissez votre impôt dans l’innovation\" />\n\t\t<meta property=\"twitter:url\" content=\"https://ifi.curie.fr\" />\n\t\t<meta property=\"twitter:title\" content=\"Ouvrez de nouvelles perspectives de guérison aux patients\" />\n\t\t<meta property=\"twitter:description\" content=\"Contre le cancer, investissez votre impôt dans l’innovation\" />\n\t\t<meta property=\"twitter:image\" content=\"/curie-gtm-img.png\" />\n\t\t<meta>\n\n\t\t<!-- Google Tag Manager -->\n\t\t<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n\t\t\t\t\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n\t\t\t\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n\t\t\t\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n\t\t})(window,document,'script','dataLayer','GTM-PXWM2PD');</script>\n\t\t<!-- End Google Tag Manager -->\n\t\t<!-- Meta Tags Generated with metatag.io -->\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t<!-- Google Tag Manager (noscript) -->\n\t<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-PXWM2PD\"\n\t\t\t\t\t  height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n\t<!-- End Google Tag Manager (noscript) -->\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "udmnat"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
