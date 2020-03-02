/*

ΕΛΛΗΝΙΚΑ ΜΗΝΥΜΑΤΑ ΣΤΟ HTML5 VALIDATION ΤΩΝ ΦΟΡΜΩΝ
By Stavros Tsourlidakis based on concept of Notis Fragopoulos (notis@webpage.gr)

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

$('.req_field')
    .on('focus blur change', function () {
        // Everything looks good
        if(this.checkValidity()){
            this.setCustomValidity('');
            return;
        }

        // Value is empty
        if(this.validity.valueMissing){
            this.setCustomValidity(messages.required || '');
            return;
        }

        //Pattern is invalid
        this.setCustomValidity(messages[this.attributes.type.value] || '');

    }).trigger('change');
