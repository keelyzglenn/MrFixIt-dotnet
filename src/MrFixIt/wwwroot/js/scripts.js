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

    $(".make-claim").click(function () {
        //marks claim for worker
        $.ajax({
            type: 'POST',
            dataType: 'html',
            url: 'Jobs/Claim/' + this.JobId,
            success: function (result) {
                var message = 'This Job has been claimed';
                $('.result-test').html(message);
            }
        });
    });

    $(document).ready(function () {
        //get click function- update is done in controller
        $('.activate').click(function () {
            var path = '#activate-' + this.id;
            console.log(this.id);
            $.ajax({
                type: 'GET',
                url: 'Jobs/Activate/' + this.id,
                success: function (result) {
                    $(path).html(result);
                }
            });
        });
    });
});