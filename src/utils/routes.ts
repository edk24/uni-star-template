import PagesJSON from "@/pages.json";
const CONFIG = {
    includes: ["path", "aliasPath", "auth"]
};

function getPagesRoutes(pages: any[], rootPath = null) {
    const routes: any[] = [];
    for (let i = 0; i < pages.length; i++) {
        const item = pages[i];
        const route: any = {};
        for (let j = 0; j < CONFIG.includes.length; j++) {
            const key = CONFIG.includes[j];
            let value = item[key];
            if (key === "path") {
                value = rootPath ? `/${rootPath}/${value}` : `/${value}`;
            }
            if (key === "aliasPath" && i == 0 && rootPath === null) {
                route[key] = route[key] || "/";
            } else if (value) {
                route[key] = value;
            }
        }
        routes.push(route);
    }
    return routes;
}

function getSubPackagesRoutes(pagesJson: any) {
    let routes: any[] = [];

    const { subPackages } = pagesJson;
    // 没有分包，或者分包为空
    if (!subPackages || subPackages.length == 0) {
        return [];
    }
    for (let i = 0; i < subPackages.length; i++) {
        const subPages = subPackages[i].pages;
        const root = subPackages[i].root;
        const subRoutes = getPagesRoutes(subPages, root);
        routes = routes.concat(subRoutes);
    }
    return routes;
}

export function generateRoutes() {
    return getPagesRoutes(PagesJSON.pages).concat(getSubPackagesRoutes(PagesJSON));
}

export const routes = generateRoutes();
