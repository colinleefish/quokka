use tauri::{AppHandle, CustomMenuItem, Manager};
use tauri::{SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem};

pub struct Tray {}

impl Tray {
    pub fn get_tray_menu() -> SystemTray {
        let menu = SystemTrayMenu::new()
            .add_item(CustomMenuItem::new("open_settings", "Settings"))
            .add_native_item(SystemTrayMenuItem::Separator)
            .add_item(CustomMenuItem::new("quit", "Quit").accelerator("CmdOrControl+Q"));

        SystemTray::new().with_menu(menu)
    }

    pub fn on_system_tray_event(app_handle: &AppHandle, event: SystemTrayEvent) {
        match event {
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "open_settings" => {
                    let window = app_handle.get_window("settings").unwrap();

                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
                "quit" => {
                    app_handle.exit(0);
                    std::process::exit(0);
                }
                _ => {}
            },
            _ => {}
        }
    }
}
