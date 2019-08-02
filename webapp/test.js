function myFunction() {
    var div_count = document.getElementsByTagName("div").length;

    for (var i = 0; i <= div_count; i++) {
        var x = document.getElementById("div" + i);

        if (i < div_count - 4) {
            x.style.display = 'none';
        }
    }

}

function startCountDown() {
    var countdownNumberEl = document.getElementById('countdown-number');
    var countdown = 10;
    const interval = setInterval(() => {
        countdown = --countdown <= 0 ? 10 : countdown;

        countdownNumberEl.textContent = countdown;

        if (countdown == 1) {
            clearInterval(interval);
        }
    }, 1000)


    // setInterval(function () {

    //     countdown = --countdown <= 0 ? 10 : countdown;

    //     countdownNumberEl.textContent = countdown;

    // }, 1000);


    //   setTimeout(function () {
    //     audiodata = [0.383,0,0.338,0];
    //     updateHighChart(audiodata);
    //   }, 1000);
}


function checkEventDate() {
    //Get the date selected from the Date Picker and convert it to a Date Object
    var selectedDate = new Date(document.getElementById("selectedDate").value);

    //Convert the Date Object to a DateSrting.
    var isSelectedDate = selectedDate.toDateString();

    // Let's assume you have an array of dates which have events 
    var eventDates = ["2019-07-07", "2019-07-08", "2019-07-09"];

    for (var i = 0; i < eventDates.length; i++) {
        //Convert each value in the dates array to a Date Object
        eventDate = new Date(eventDates[i])

        //Convert every Date Object to a DateString type
        iseventDate = eventDate.toDateString();

        //Now compare if the selected date is a event date
        if (iseventDate == isSelectedDate) {
            alert("There is an event on the selected date.");
        }
    }
}



function openForm(elem) {
    // alert("Calling openForm() from Button " + elem.id);
    alert("Calling openForm() from Button " + elem.id);
}


function saveYesInputDatataToFile() {
    var userInput = document.getElementById("yesButton").value;
    var blob = new Blob([userInput],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "userInput.txt");
}

function saveNoInputDataToile() {
    var userInput = document.getElementById("noButton").value;
    var blob = new Blob([userInput],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "userInput.txt");
}

var xLabels = {
    20 : 'No Complexity', 40 : 'Below Average', 60 : 'Average', 80 : 'Above Average', 100 : 'Highly Focused', 120 : 'Extraordinarily Focused'}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Individual Thinking", "Individual Feeling", "Individual Doing",
        "Partner Thinking", "Partner Feeling", "Partner Doing",
        "Team Thinking", "Team Feeling", "Team Doing",
        "Cultural Thinking", "Cultural Feeling", "Cultural Doing"],
        datasets: [{
            label: 'Dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [27, 25, 50, 45, 110, 62, 30, 100,56, 28, 87, 30,71,23]
        }]
    },

    // Configuration options go here
    options: {      
        scales: {
            xAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        // for a value (tick) equals to 20
                        return xLabels[value];
                    },
                    beginAtZero: true,
            min: 20,
            max: 120, //The maximum in the data range
            stepSize: 20, //The data gap
                }
            }]
      }}
});


var config = {
    type: 'horizontalBar',
    data: {
    yLabels: ["Individual Thinking", "Individual Feeling", "Individual Doing",
    "Partner Thinking", "Partner Feeling", "Partner Doing",
    "Team Thinking", "Team Feeling", "Team Doing",
    "Cultural Thinking", "Cultural Feeling", "Cultural Doing"],
    xLabels: ["","No Complexity","","Below Average","","","Average","Above Average","Highly Focused", "", "", "", "", "Extraordinarily Focused"],
    datasets: [{
        data: ["No Complexity","No Complexity","No Complexity","No Complexity",
        "No Complexity","No Complexity","No Complexity","No Complexity",
        "No Complexity","No Complexity","No Complexity","No Complexity"]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
        },
        scales: {
            xAxes: [{
                type: 'category',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Complexity'
                }
            }],
            yAxes: [{
                type: 'category',
                position: 'left',
                display: true,
                scaleLabel: {
                    display: false
                }
            }]
        }
    }
};