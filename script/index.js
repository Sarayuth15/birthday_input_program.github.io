$(document).ready(function () {
    // Initialization 
    var birthDate = '';
    var birthMonth = '';
    var nextYear;

    // Show first modal on page load
    $("#modal_date").modal('show');

    // Handle the Ok button click in the first modal
    $("#close_first_modal").click(function () {
        birthDate = $("#getDate").val();
        console.log("Birth Date:", birthDate);
        $("#modal_date").modal('hide');

        // Show the second modal
        $("#modal_month").modal('show');
    });

    // Handle the Ok button click in the second modal
    $("#close_second_modal").click(function () {
        birthMonth = $("#get_month").val();
        console.log("Birth Month:", birthMonth);
        $("#modal_month").modal('hide');

        //  Calculate next year
        //  Action: Determine whether the next birthday is this year or next year.
        //  Logic: Compare the current month and date with birthMonth and birthDate to set nextYear.
        var today = new Date();
        if (today.getMonth() + 1 > birthMonth || (today.getMonth() + 1 == birthMonth && today.getDate() > birthDate)) {
            nextYear = new Date().getFullYear() + 1;
        } else {
            nextYear = new Date().getFullYear();
        }
        console.log("Next Year:", nextYear);

        $("#coming-year").empty().append(nextYear);

        function countdown() {
            const remaining = new Date(`${nextYear}-${birthMonth}-${birthDate} 00:00:00`) - new Date();
            console.log("Remaining time:", remaining);
            
            const day = Math.floor(remaining / (1000 * 60 * 60 * 24));
            console.log("Day:", day);

            const hours = Math.floor(remaining / (1000 * 60 * 60 )) % 24;
            console.log("Hours:", hours);

            const minutes = Math.floor(remaining / (1000 * 60)) % 60;
            console.log("Minutes:", minutes)
            
            const seconds = Math.floor(remaining / 1000) % 60;
            console.log("Second:", seconds);

            $("#days").empty().append(day);
            $("#hours").empty().append(hours)
            $("#minutes").empty().append(minutes)
            $("#seconds").empty().append(seconds)
        }

        countdown();
        //  Interval Update:  Use setInterval to call countdown every second, keeping the countdown updated.
        setInterval(countdown, 1000);
    });
});