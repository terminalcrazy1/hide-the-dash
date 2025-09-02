import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

let dashOriginalParent;

export default class MyExtension extends Extension {
    // The constructor is optional but can be used for initialization.
    // It's good practice to call super(metadata) to properly initialize the parent class.
    constructor(metadata) {
        super(metadata);
    }

    enable() {
        // This function is called when the extension is enabled.
        // We save the dash's original parent and then remove it.
        if (Main.overview.dash) {
            dashOriginalParent = Main.overview.dash.get_parent();
            if (dashOriginalParent) {
                Main.overview.dash.hide();
            }
        }
    }

    disable() {
        // This function is called when the extension is disabled.
        // We restore the dash to its original state.
        if (Main.overview.dash) {
            Main.overview.dash.show();
        }
    }
}
