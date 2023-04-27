import { CloseIcon, LogOutIcon } from "../js/icons";
import { previewTemplate } from "./preview.template";

export const mainTemplate = `
<section class="sidebar">
</section>
<section class="main">
    <div class="main-grid">
        <div class="span-3">
        <div class="links-holder">
            <header class="header">
            <h1 id="welcome">Dashboard</h1>
            <button id="logout">${LogOutIcon}</button>
            </header>
            <div class="links">
            <section class="new-link">
                <button id="newLinkBtn">Add New Link</button>
            </section>
            <section class="link-list" id="link-list">
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
                <!-- List template should be here -->
            </section>
            </div>
        </div>
        </div>
        <div class="span-2">
        <div class="previewHolder">
            <header class="header">
            <h1 id="welcome">Preview</h1>
            </header>
            <div class="previewPan">
            <div class="preview-holder">
                <div class="preview-mobile">${previewTemplate}</div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <div class="previewBtn" id="previewBtn">
    <button>Preview</button>
    </div>
    <div class="previewPanel">
    <div class="cont">
        ${previewTemplate}
        <div class="close-btn-holder">
        <button id="close" class="close-btn">${CloseIcon}</button>
        </div>
    </div>
</div>
`;