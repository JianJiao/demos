$(document).ready(function(){
	$form = $("#uploadForm");
	var formData = new FormData($form[0]);	
	$form.on("click", "input[type='submit']", function(e){
		e.preventDefault();
		console.log($form);
		$.ajax({
      url: '/api/photo',  //Server script to process data
      type: 'POST',
      // xhr: function() {  // Custom XMLHttpRequest
      //     var myXhr = $.ajaxSettings.xhr();
      //     if(myXhr.upload){ // Check if upload property exists
      //         myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
      //     }
      //     return myXhr;
      // },
      //Ajax events
      beforeSend: beforeSendHandler,
      success: completeHandler,
      error: errorHandler,
      // Form data
      data: formData,
      //Options to tell jQuery not to process data or worry about content-type.
      cache: false,
      contentType: false,
      processData: false
    }); // ajax ends
	}); 


// ready ends	
});


$(':button').click(function(){
    var formData = new FormData($('form')[0]);
    $.ajax({
        url: 'upload.php',  //Server script to process data
        type: 'POST',
        xhr: function() {  // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if(myXhr.upload){ // Check if upload property exists
                myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
            }
            return myXhr;
        },
        //Ajax events
        beforeSend: beforeSendHandler,
        success: completeHandler,
        error: errorHandler,
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false
    });
});