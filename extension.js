import * as Main from 'resource:///org/gnome/shell/ui/main.js';

let dashOriginalParent;

function init() {
}

function enable() {
    // This function is called when the extension is enabled.
    // We save the dash's original parent and then remove it.
    if (Main.overview.dash) {
        dashOriginalParent = Main.overview.dash.get_parent();
        if (dashOriginalParent) {
            Main.overview.dash.hide();
        }
    }
}

function disable() {
    // This function is called when the extension is disabled.
    // We restore the dash to its original state.
    if (Main.overview.dash) {
        Main.overview.dash.show();
    }
}
