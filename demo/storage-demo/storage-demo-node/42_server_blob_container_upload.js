// 패키지 import 수행
var azure = require('azure-storage');
var blobService = azure.createBlobService('dwstoragecampmar', 'AfP0ADfyMARIpebesn+LbBDAX78ZNMObKONzfzs/OF9ka1LS5+zoJHOW43+P9fNCyDySq0eIpIoCNOWBlK7l9A==');

// blob 업로드 수행
blobService.createBlockBlobFromLocalFile('nodecontainer', 'AzureDC', 'azure_center.png', function(error, result, response) {
  publicAccessLevel: 'blob'
}, function(error, result, response) {
  if (!error) {
	console.log(response);
  } else {
	console.log(error);
  }
});
