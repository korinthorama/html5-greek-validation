/*

ΕΛΛΗΝΙΚΑ ΜΗΝΥΜΑΤΑ ΣΤΟ HTML5 VALIDATION ΤΩΝ ΦΟΡΜΩΝ
By Notis Fragopoulos
https://webpage.gr

add a .req class to input you want to validate 
add the HTML5 validation attribute (required, email, url, number)
add the following snippet in jquery ready section

*/

var messages = {
    'required': 'Το πεδίο αυτό είναι απαραίτητο',
    'email': 'Το πεδίο αυτό πρέπει να περιέχει e-mail διεύθυνση',
    'url': 'Το πεδίο αυτό πρέπει να περιέχει διαδικτυακή διεύθυνση (URL)',
    'number': 'Το πεδίο αυτό πρέπει να περιέχει αριθμητική τιμή',
};

$('.req').each(function(){ 
    $(this).on('focus blur change', function () {
        if (!$(this).val()) {
            for(attr in messages){
                if(this.hasAttribute(attr)) this.setCustomValidity(messages[attr]);
            }
        }else{
            this.setCustomValidity('');
        }
    }).trigger('change');
});
