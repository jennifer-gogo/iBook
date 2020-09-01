{
	"_Name": "IBook",
	"Version": "/IBook/Globals/AppDefinition_Version.global",
	"MainPage": "/IBook/Pages/Main.page",
	"OnLaunch": [
		"/IBook/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/IBook/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/IBook/Actions/Service/InitializeOffline.action",
	"Styles": "/IBook/Styles/Styles.less",
	"Localization": "/IBook/i18n/i18n.properties"
}
