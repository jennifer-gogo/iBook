export default function ReturnConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Do you want to return this book?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/IBook/Actions/LendingSet_Delete.action').then(
				(success) => Promise.resolve('Return successfully' + success),
				(failure) => Promise.reject('Return failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}