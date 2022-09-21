import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/starredTab/index.html")
@PreventIframe("/starredTab/starred.html")
export class StarredTab {
}
