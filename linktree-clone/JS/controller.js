import { listLinkTemplate } from "../Templates/listLink.template";
import { listPreviewLinkTemplate } from "../Templates/preview.template";
import { useAttribute, getEl, getItem, setItem } from "./utils";

let links = getLinks();
let isPreviewOpen = false;

const getLinks = () => {
    return getItem("linkList") || [{
        title: "Website",
        url: "https://techcoach.pro",
        isVisible: true,
        createdAt: new Date().getTime(),
        click: 0,
        thumbnail: "",
    }];
};

const isTitleAvailable = (inputEl, link) => {
    if (link.title == "" || link.title == null) {
        useAttribute(inputEl, "hidden", true);
    }
};

const isUrlAvailable = (inputEl, link) => {
    if (link.url == "" || link.url == null) {
        useAttribute(inputEl, "hidden", true);
    }
};

const checkIsVisible = (switchEl, link) => {
    if (link.isVisible) {
        useAttribute(switchEl, "checked", true);
    }
};

const deleteLink = (btnEl, link) => {
    btnEl.addEventListener("click", (e) => {
        e.preventDefault();
        links = links.filter((l) => l !== link);
        setItem(links, "linkList");
        displayLinks();
        previewLinks();
    });
};

const inputListener = (holder, input, span, link) => {
    holder.addEventListener("click", () => {
        span.classList.replace("flex", "hidden");
        useAttribute(input, "hidden", "", true);
        input.focus();
        input.addEventListener("blur", () => {
        if (input.value === "" || input.value === null) {
            span.classList.replace("hidden", "flex");
            useAttribute(input, "hidden", true);
            return;
        }

        if (input.id.includes("url-input")) {
            link.url = input.value;
        }

        if (input.id.includes("title-input")) {
            link.title = input.value;
        }

        setItem(links, "linkList");
        });
    });
};

const toggleVisibility = (switchEl, link) => {
    switchEl.addEventListener("click", () => {
        if (!link.isVisible) {
        link.isVisible = true;
        useAttribute(switchEl, "checked", true);
        } else {
        link.isVisible = false;
        useAttribute(switchEl, "checked", "", true);
        }
        setItem(links, "linkList");
        previewLinks();
    });
};

export function addNewLink(btnEl) {
    btnEl.addEventListener("click", (e) => {
        e.preventDefault();
        const link = {
        title: "",
        url: "",
        isVisible: false,
        createdAt: new Date().getTime(),
        click: 0,
        thumbnail: "",
        };

        links.push(link);
        setItem(links, "linkList");
        displayLinks();
    });
}

export function displayLinks(elementRef) {
    const element = elementRef || getEl("#link-list");
    element.innerHTML = "";
    links
    .sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .forEach((link, index) => {
        let parent = new DOMParser().parseFromString(
            listLinkTemplate(link, index),
            "text/html"
        ).body.firstChild;

        const titleInput = getEl(`#title-input-${index}`, true, parent);
        const urlInput = getEl(`#url-input-${index}`, true, parent);
        const delBtn = getEl(`#del-btn-${index}`, true, parent);
        const switchBtn = getEl(`#switch-${index}`, true, parent);
        const titleHolder = getEl(`#title-holder-${index}`, true, parent);
        const titleSpan = getEl(`#title-span-${index}`, true, parent);
        const urlHolder = getEl(`#url-holder-${index}`, true, parent);
        const urlSpan = getEl(`#url-span-${index}`, true, parent);

        isTitleAvailable(titleInput, link);
        isUrlAvailable(urlInput, link);
        deleteLink(delBtn, link);
        checkIsVisible(switchBtn, link);
        inputListener(titleHolder, titleInput, titleSpan, link);
        inputListener(urlHolder, urlInput, urlSpan, link);
        toggleVisibility(switchBtn, link);

        element.appendChild(parent);
    });
}

export function previewLinks(elementRef) {
    const element = elementRef || getEl("#preview-link");
    element.innerHTML = "";
    links
    .sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .forEach((link) => {
        if (link.isVisible) {
            let parent = new DOMParser().parseFromString(
            listPreviewLinkTemplate(link),
            "text/html"
            ).body.firstChild;
            element.appendChild(parent);
        }
    });
}

export function openPreview(btn) {
    const previewPanel = getEl(".previewPanel");
    const closeBtn = getEl("#close");
    btn.addEventListener("click", () => {
        if (!isPreviewOpen) {
        previewPanel.classList.add("panelOpen");
        previewLinks();
        isPreviewOpen = true;
        } else {
        previewPanel.classList.remove("panelOpen");
        isPreviewOpen = false;
        }
    });

    closeBtn.addEventListener("click", (e) => {
        previewPanel.classList.remove("panelOpen");
        isPreviewOpen = false;
    });
}