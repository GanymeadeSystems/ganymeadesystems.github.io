jQuery(function($)
{
    $("#signup").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': '6-HPZmhhdGQ5NTQcOwiITw',
                'message': {
                    'from_email': launch.control@ganymeade.com,
                    'from_name': name,
                    'text': email
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'to': [
                    {
                        'email': 'launch.control@ganymeade.com',
                        'name': 'Ganymeade Systems',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Your message has been sent. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});
