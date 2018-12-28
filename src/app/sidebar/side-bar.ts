
/*Sets up menu items in the following form:
(SubMenus follow same format)
	"Formal Name,Display Name,Link,Help Name,Help Link;"

	Formal Name		- ID name used in list generation (no spaces, etc.)
    Display Name	- Name displayed in TOC; set to "null" for submenu generation
    Link			- TOC file link
	Help Name		- Name display in Help TOC; set to "null" if not used
	Help Link		- Name of Help File; "null" if not used
*/

 interface SideBar {
        formalName: String;
        displayName: String;
        link: String;
        helpName: String;
        helpLink: String;
}

export interface MenuOption {
    mainMenu: SideBar;
}
