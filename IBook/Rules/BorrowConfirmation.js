export default function BorrowConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Do you want to borrow this book?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/IBook/Actions/CloseModalPage_Cancel.action').then(
				(success) => Promise.resolve('Borrowed successfully' + success),
				(failure) => Promise.reject('Borrow failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}