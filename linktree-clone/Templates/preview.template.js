export const previewTemplate = `
    <div class="preview">
        <div class="list-links">
        <div class="main" id="preview-link">
        </div>
        </div>
    </div>
`;

export const listPreviewLinkTemplate = (link) => `
    <div class="link">
        <a href="${link.url}" target="_blank">
        ${link.title}
        </a>
    </div>
`;