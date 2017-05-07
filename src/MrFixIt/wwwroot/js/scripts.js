var test = "it works";
//already has a js file - need to connect it with scripts


//edit form for claiming job -get

$(document).ready(function () {
    $('.edit-form').click(function (event) {
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: '/Job/Claim' = this.value,
            success: function (result) {
                $('.return-claim').html(result);
            }
        });
    });
});