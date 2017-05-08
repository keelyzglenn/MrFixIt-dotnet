var test = "it works";
//already has a js file - need to connect it with scripts


//edit form for claiming job -get

$(document).ready(function () {
    //Claim button get function
    $('.edit-claim').click(function () {
        var path = '#return-claim-' + this.value;
        $.ajax({
            type: 'GET',
            datatype: 'html',
            url: 'Jobs/Claim/' + this.value,
            success: function (result) {
                $(path).html(result);
            }
        });
    });



});