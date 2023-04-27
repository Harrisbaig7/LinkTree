import {
    BarChatIcon,
    CalenderIcon,
    ImageIcon,
    LockClosedIcon,
    RepeatIcon,
    StartIcon,
    TrashIcon
} from "../js/icons";
    import PencilLogo from "../assets/pencil-outline.svg";
    
    export const listLinkTemplate = (link, index) =>`
        <div class="new-link-form">
        <form>
            <div class="form-input">
            <div class="inputs">
                <div class="inputs-header">
                <div id="title-holder-${index}" class="title-input">
                    <input 
                    type="text"
                    id="title-input-${index}"
                    placeholder="Title" 
                    value="${link.title}"
                    />
                    <span 
                    id="title-span-${index}" 
                    class="${link.title == "" ? "flex" : "hidden"}"
                    ><span>Title</span> <img src="${PencilLogo}" alt=""></span>
                </div>
                <label class="switch">
                    <input type="checkbox" id="switch-${index}">
                    <span class="slider round"></span>
                </label>
                </div>
                <div class="divider"></div>
                <div id="url-holder-${index}" class="url-input">
                <input 
                    type="text"
                    id="url-input-${index}"
                    placeholder="Url"
                    value="${link.url}"
                />
                <span id="url-span-${index}" class="${
                    link.url == "" ? "flex" : "hidden"
                }"><span>Url</span> <img src="${PencilLogo}" alt=""></span>
                </div>
                <div class="divider"></div>
                <div class="actions">
                <div class="btn-list">
                    <button>
                    ${RepeatIcon}
                    </button>
                    <button>
                    ${ImageIcon}
                    </button>
                    <button>
                    ${StartIcon}
                    </button>
                    <button>
                    ${CalenderIcon}
                    </button>
                    <button>
                    ${LockClosedIcon}
                    </button>
                    <button>
                    ${BarChatIcon}
                    <span>0 clicks</span>
                    </button>
                </div>
                <button type="button" id="del-btn-${index}">
                    ${TrashIcon}
                    <span>Delete</span>
                </button>
                </div>
            </div>
            </div>
        </form>
        </div>
    `;