function init() {
    // Task 1:
    document.getElementById("first").src = "flower2.png";

    // Task 2:
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "flower2.png";
    images[3].src = "flower2.png";

    // Task 3:
    document.getElementById('insert-here').innerHTML = '<div><p>Your are great!</p></div>';
    
    // Task 4:
    let image = document.createElement('img');
    image.setAttribute('src','flower2.png')
    document.getElementById('new_element').appendChild(image);

    // Task 5:
    let spans = document.getElementById('rainbow').getElementsByTagName("span");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for(var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors [i % colors.length];
    }

    // Task 6:
    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if(filename === "flower1.png")
                event.target.src = "flower2.png";
            else 
                event.target.src = "flower1.png";
        }
    };
      
    document.getElementById("event").addEventListener("mouseover", changeSrc);      
}

function greet() {
    window.alert("Hello world!")
}