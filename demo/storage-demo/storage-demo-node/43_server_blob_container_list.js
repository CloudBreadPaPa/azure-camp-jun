// 패키지 import 수행
var azure = require('azure-storage');

var blobService = azure.createBlobService('dwstoragecampmar', 'AfP0ADfyMARIpebesn+LbBDAX78ZNMObKONzfzs/OF9ka1LS5+zoJHOW43+P9fNCyDySq0eIpIoCNOWBlK7l9A==');

// blob 리스트 수행
blobService.listBlobsSegmented('nodecontainer', null, function(error, result, response){
  if (!error) {
	console.log(response);
	console.log(result);
  } else {
	console.log(error);
  }
});
