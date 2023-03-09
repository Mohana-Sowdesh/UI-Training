// Creating main section
var main_section = document.querySelector("main");

startAgain();

function startAgain() {
    // To remove choose shape section from main section
    main_section.innerHTML = " ";

    // ----------------- START :: Creating choose shape section ----------------------//
    // Creating choose-shape section
    var choose_shape_section = document.createElement("section");
    choose_shape_section.classList.add("choose-shape");
    main_section.appendChild(choose_shape_section);

    // Creating text Choose a shape
    var txt_choose_shape_div = document.createElement("div");
    txt_choose_shape_div.innerHTML = "1. Choose a Shape";
    txt_choose_shape_div.classList.add("txt-choose-shape");
    choose_shape_section.appendChild(txt_choose_shape_div);

    // Creating shapes div
    var shapes_div = document.createElement("div");
    shapes_div.classList.add("shapes");
    choose_shape_section.appendChild(shapes_div);

    // Creating shapes inside shapes div
    var shape_circle = document.createElement("div");
    shape_circle.classList.add("circle");
    shapes_div.appendChild(shape_circle);

    var shape_triangle = document.createElement("div");
    shape_triangle.classList.add("triangle");
    shapes_div.appendChild(shape_triangle);

    var shape_square = document.createElement("div");
    shape_square.classList.add("square");
    shapes_div.appendChild(shape_square);

    choose_shape_section.appendChild(shapes_div);

    // Adding eventListener to each shape
    document.querySelector('.circle').addEventListener('click',selectShape);
    document.querySelector('.square').addEventListener('click',selectShape);
    document.querySelector('.triangle').addEventListener('click',selectShape);

    // Shapes array for forEach loop iteration
    var shapes = ["circle", "triangle", "square"];

    // Variable to store user radius/side input
    var userInput = "";

    function selectShape(event) {
        // Storing selected shape in localStorage
        localStorage.setItem("selected_shape",event.target.className);

        // Code for tick
        let tick = "<i class=\"fa-solid fa-check tick\"></i>";
        let triangle_tick = "<i class=\"fa-solid fa-check triangle-tick \"></i>";
        var isTicked = document.querySelectorAll("i");

        // Code to bring tick in shapes
        if(event.target.className=="triangle")
            document.querySelector("."+event.target.className).innerHTML = triangle_tick;
        else
            document.querySelector("."+event.target.className).innerHTML = tick;

        // To create next-button
        if(isTicked.length==0){
            let next_button = document.createElement("button");
            next_button.classList.add("next-button");
            next_button.innerHTML = "NEXT";
            choose_shape_section.appendChild(next_button);
        }

        // Loop to remove previous ticks
        for(let j=0; j<shapes.length; j++)
        {
            var selected = localStorage.getItem("selected_shape");
            if(selected!="circle")
            {
                document.querySelector(".circle").innerHTML = "";
            }
            if(selected!="triangle")
            {
                document.querySelector(".triangle").innerHTML = "";
            }
            if(selected!="square")
            {
                document.querySelector(".square").innerHTML = "";
            }
        }

        // Event listener for next button
        document.querySelector('.next-button').addEventListener('click',inputSide);
    }
    // ----------------- END :: Creating choose shape section ----------------------//
}

// ----------------- START :: Creating user input measurement section ----------------------//
function inputSide(event) {
    // To remove choose shape section from main section
    main_section.innerHTML = " ";

    var side_section = document.createElement("section");
    side_section.classList.add("measurements");
    main_section.appendChild(side_section);

    if(localStorage.getItem("selected_shape")=="circle")
    {
        // Creating div for circle
        var circle_radius = document.createElement("div");
        circle_radius.classList.add("circle-radius");

        // Creating text enter radius
        var txt_enter_radius = document.createElement("div");
        txt_enter_radius.classList.add("txt-enter-radius");
        txt_enter_radius.innerHTML = "2. Enter Radius";
        circle_radius.appendChild(txt_enter_radius);

        // Creating input text box
        var circle_txt_box = document.createElement("input");
        circle_txt_box.setAttribute('type', 'text');
        circle_txt_box.classList.add("radius");
        circle_radius.appendChild(circle_txt_box);

        // Creating calculate button
        var calc_btn =  document.createElement("button");
        calc_btn.classList.add("calculate-button");
        calc_btn.innerHTML = "CALCULATE";
        circle_radius.appendChild(calc_btn);

        side_section.appendChild(circle_radius);
    }
    else if(localStorage.getItem("selected_shape")=="triangle")
    {
        // Creating div for triangle
        var triangle_side = document.createElement("div");
        triangle_side.classList.add("triangle-base-height");

        // Creating text enter base & height
        var txt_enter_base = document.createElement("div");
        txt_enter_base.classList.add("txt-enter-radius");
        txt_enter_base.innerHTML = "2. Enter Side (Base & Height)";
        triangle_side.appendChild(txt_enter_base);

        // Creating input text box
        var triangle_txt_box = document.createElement("input");
        triangle_txt_box.setAttribute('type', 'text');
        triangle_txt_box.classList.add("radius");
        triangle_side.appendChild(triangle_txt_box);

        // Creating calculate button
        var calc_btn =  document.createElement("button");
        calc_btn.classList.add("calculate-button");
        calc_btn.innerHTML = "CALCULATE";
        triangle_side.appendChild(calc_btn);

        side_section.appendChild(triangle_side);
    }
    else if(localStorage.getItem("selected_shape")=="square")
    {
        // Creating div for square
        var square_side = document.createElement("div");
        square_side.classList.add("square-side");

        // Creating text enter side
        var txt_enter_side = document.createElement("div");
        txt_enter_side.classList.add("txt-enter-radius");
        txt_enter_side.innerHTML = "2. Enter Side";
        square_side.appendChild(txt_enter_side);

        // Creating input text box
        var square_txt_box = document.createElement("input");
        square_txt_box.setAttribute('type', 'text');
        square_txt_box.classList.add("radius");
        square_side.appendChild(square_txt_box);

        // Creating calculate button
        var calc_btn =  document.createElement("button");
        calc_btn.classList.add("calculate-button");
        calc_btn.innerHTML = "CALCULATE";
        square_side.appendChild(calc_btn);

        side_section.appendChild(square_side);
    }

    // Adding event listener to calculate btn
    document.querySelector('.calculate-button').addEventListener('click', calcArea);
}
// ----------------- END :: Creating user input measurement section ----------------------//

// ----------------- START :: Display area, perimeter section ----------------------//
function calcArea(event) {
     // Storing user input
    userInput = document.querySelector("input").value;

    // To remove choose shape section from main section
    main_section.innerHTML = " ";

    // Creating a section
    var shape_info_section = document.createElement("section");
    shape_info_section.classList.add("shape-info");
    main_section.appendChild(shape_info_section);

    // If circle is selected
    if(localStorage.getItem("selected_shape")=="circle")
    {
        // Creating circle shape div parent container
        var circle_info = document.createElement("div");
        circle_info.classList.add("circle-shape-info");

        // Creating circle container
        var circle_div = document.createElement("div");
        circle_div.classList.add("shape");
        circle_info.appendChild(circle_div);

        // Creating circle
        var circle_shpe = document.createElement("div");
        circle_shpe.classList.add("circle-shape");
        circle_div.appendChild(circle_shpe);

        // Creating text 'circle'
        var txt_shape = document.createElement("div");
        txt_shape.classList.add("txt-shape");
        txt_shape.innerHTML = "Circle";
        circle_info.appendChild(txt_shape);

        // --------- START :: Creating radius info box --------
        var radius_box = document.createElement("div");
        radius_box.classList.add("info-box");
        
        // Radius column
        var radius_div = document.createElement("div");
        radius_div.classList.add("txt-radius");
        radius_div.innerHTML = "RADIUS";
        radius_box.appendChild(radius_div);

        // Radius notation
        var radius_notation = document.createElement("div");
        radius_notation.classList.add("radius-notation");
        radius_notation.innerHTML = "r";
        radius_box.appendChild(radius_notation);

        // Displaying user input column 
        var user_input = document.createElement("div");
        user_input.classList.add("user-input");
        user_input.innerHTML = userInput + " cm";
        radius_box.appendChild(user_input);

        circle_info.appendChild(radius_box);
        // --------- END :: Creating radius info box --------

        // --------- START :: Creating area info box --------
        var carea_box = document.createElement("div");
        carea_box.classList.add("info-box");

        // Area column
        var carea_div = document.createElement("div");
        carea_div.classList.add("txt-radius");
        carea_div.innerHTML = "AREA";
        carea_box.appendChild(carea_div);

        // Area notation
        var carea_notation = document.createElement("div");
        carea_notation.classList.add("radius-notation");
        carea_notation.innerHTML = "&#x3C0;r<sup>2</sup>";
        carea_box.appendChild(carea_notation);

        // Area calc column 
        var carea_calc = document.createElement("div");
        carea_calc.classList.add("user-input");
        carea_calc.innerHTML = (3.14*userInput*userInput).toFixed(2) + " sq cm";
        carea_box.appendChild(carea_calc);

        circle_info.appendChild(carea_box);
        // --------- END :: Creating area info box --------

        // --------- START :: Creating perimeter info box --------
        var cperi_box = document.createElement("div");
        cperi_box.classList.add("info-box");

        // Perimeter column
        var cperi_div = document.createElement("div");
        cperi_div.classList.add("txt-radius");
        cperi_div.innerHTML = "PERIMETER";
        cperi_box.appendChild(cperi_div);

        // Perimeter notation
        var cperi_notation = document.createElement("div");
        cperi_notation.classList.add("radius-notation");
        cperi_notation.innerHTML = "2&#x3C0;r";
        cperi_box.appendChild(cperi_notation);

        // Perimeter calc column 
        var cperi_calc = document.createElement("div");
        cperi_calc.classList.add("user-input");
        cperi_calc.innerHTML = (2*3.14*userInput).toFixed(2) + " cm";
        cperi_box.appendChild(cperi_calc);

        circle_info.appendChild(cperi_box);
        // --------- END :: Creating perimeter info box --------

        // Creating 'Start Again' btn
        var strt_agn_btn =  document.createElement("button");
        strt_agn_btn.classList.add("btn-start-again");
        strt_agn_btn.innerHTML = "START AGAIN";
        circle_info.appendChild(strt_agn_btn);
        
        main_section.appendChild(circle_info);
    }
    // If triangle is selected
    else if(localStorage.getItem("selected_shape")=="triangle")
    {
      // Creating triangle shape div parent container
      var triangle_info = document.createElement("div");
      triangle_info.classList.add("triangle-shape-info");

      // Creating triangle container
      var triangle_div = document.createElement("div");
      triangle_div.classList.add("shape");
      triangle_info.appendChild(triangle_div);

      // Creating triangle
      var triangle_shpe = document.createElement("div");
      triangle_shpe.classList.add("triangle-shape");
      triangle_div.appendChild(triangle_shpe);

      // Creating text 'triangle'
      var txt_shape = document.createElement("div");
      txt_shape.classList.add("txt-shape");
      txt_shape.innerHTML = "Equilateral Triangle";
      triangle_info.appendChild(txt_shape);

      // --------- START :: Creating base & height info box --------
      var tside_box = document.createElement("div");
      tside_box.classList.add("info-box");
      
      // Side column
      var tside_div = document.createElement("div");
      tside_div.classList.add("txt-radius");
      tside_div.innerHTML = "SIDE";
      tside_box.appendChild(tside_div);

      // Side notation
      var tside_notation = document.createElement("div");
      tside_notation.classList.add("radius-notation");
      tside_notation.innerHTML = "s";
      tside_box.appendChild(tside_notation);

      // Displaying user input column 
      var user_input = document.createElement("div");
      user_input.classList.add("user-input");
      user_input.innerHTML = userInput + " cm";
      tside_box.appendChild(user_input);

      triangle_info.appendChild(tside_box);
      // --------- END :: Creating base & height info box --------

      // --------- START :: Creating area info box --------
      var tarea_box = document.createElement("div");
      tarea_box.classList.add("info-box");

      // Area column
      var tarea_div = document.createElement("div");
      tarea_div.classList.add("txt-radius");
      tarea_div.innerHTML = "AREA";
      tarea_box.appendChild(tarea_div);

      // Area notation
      var tarea_notation = document.createElement("div");
      tarea_notation.classList.add("radius-notation");
      tarea_notation.innerHTML = "0.433 * s *s";
      tarea_box.appendChild(tarea_notation);

      // Area calc column 
      var tarea_calc = document.createElement("div");
      tarea_calc.classList.add("user-input");
      tarea_calc.innerHTML = (0.433*userInput*userInput).toFixed(2) + " sq cm";
      tarea_box.appendChild(tarea_calc);

      triangle_info.appendChild(tarea_box);
      // --------- END :: Creating area info box --------
    
      // --------- START :: Creating perimeter info box --------
      var tperi_box = document.createElement("div");
      tperi_box.classList.add("info-box");

      // Perimeter column
      var tperi_div = document.createElement("div");
      tperi_div.classList.add("txt-radius");
      tperi_div.innerHTML = "PERIMETER";
      tperi_box.appendChild(tperi_div);

      // Perimeter notation
      var tperi_notation = document.createElement("div");
      tperi_notation.classList.add("radius-notation");
      tperi_notation.innerHTML = "3 * s";
      tperi_box.appendChild(tperi_notation);

      // Perimeter calc column 
      var tperi_calc = document.createElement("div");
      tperi_calc.classList.add("user-input");
      tperi_calc.innerHTML = (3*userInput).toFixed(2) + " cm";
      tperi_box.appendChild(tperi_calc);

      triangle_info.appendChild(tperi_box);
      // --------- END :: Creating perimeter info box --------

      // Creating 'Start Again' btn
      var strt_agn_btn =  document.createElement("button");
      strt_agn_btn.classList.add("btn-start-again");
      strt_agn_btn.innerHTML = "START AGAIN";
      triangle_info.appendChild(strt_agn_btn);
     
      main_section.appendChild(triangle_info);
    }
    // If square is selected
    else if(localStorage.getItem("selected_shape")=="square")
    {
        // Creating square shape div parent container
      var square_info = document.createElement("div");
      square_info.classList.add("square-shape-info");

      // Creating square container
      var square_div = document.createElement("div");
      square_div.classList.add("shape");
      square_info.appendChild(square_div);

      // Creating square
      var square_shpe = document.createElement("div");
      square_shpe.classList.add("square-shape");
      square_div.appendChild(square_shpe);

      // Creating text 'square'
      var txt_shape = document.createElement("div");
      txt_shape.classList.add("txt-shape");
      txt_shape.innerHTML = "Square";
      square_info.appendChild(txt_shape);

      // --------- START :: Creating side info box --------
      var sside_box = document.createElement("div");
      sside_box.classList.add("info-box");
      
      // Side column
      var sside_div = document.createElement("div");
      sside_div.classList.add("txt-radius");
      sside_div.innerHTML = "SIDE";
      sside_box.appendChild(sside_div);

      // Side notation
      var sside_notation = document.createElement("div");
      sside_notation.classList.add("radius-notation");
      sside_notation.innerHTML = "s";
      sside_box.appendChild(sside_notation);

      // Displaying user input column 
      var user_input = document.createElement("div");
      user_input.classList.add("user-input");
      user_input.innerHTML = userInput + " cm";
      sside_box.appendChild(user_input);

      square_info.appendChild(sside_box);
      // --------- END :: Creating side info box --------
    
      // --------- START :: Creating area info box --------
      var sarea_box = document.createElement("div");
      sarea_box.classList.add("info-box");

      // Area column
      var sarea_div = document.createElement("div");
      sarea_div.classList.add("txt-radius");
      sarea_div.innerHTML = "AREA";
      sarea_box.appendChild(sarea_div);

      // Area notation
      var sarea_notation = document.createElement("div");
      sarea_notation.classList.add("radius-notation");
      sarea_notation.innerHTML = "s * s";
      sarea_box.appendChild(sarea_notation);

      // Area calc column 
      var sarea_calc = document.createElement("div");
      sarea_calc.classList.add("user-input");
      sarea_calc.innerHTML = (userInput*userInput).toFixed(2) + " sq cm";
      sarea_box.appendChild(sarea_calc);

      square_info.appendChild(sarea_box);
      // --------- END :: Creating area info box --------
    
      // --------- START :: Creating perimeter info box --------
      var speri_box = document.createElement("div");
      speri_box.classList.add("info-box");

      // Perimeter column
      var speri_div = document.createElement("div");
      speri_div.classList.add("txt-radius");
      speri_div.innerHTML = "PERIMETER";
      speri_box.appendChild(speri_div);

      // Perimeter notation
      var speri_notation = document.createElement("div");
      speri_notation.classList.add("radius-notation");
      speri_notation.innerHTML = "4 * s";
      speri_box.appendChild(speri_notation);

      // Perimeter calc column 
      var speri_calc = document.createElement("div");
      speri_calc.classList.add("user-input");
      speri_calc.innerHTML = (4*userInput).toFixed(2) + " cm";
      speri_box.appendChild(speri_calc);

      square_info.appendChild(speri_box);
      // --------- END :: Creating perimeter info box --------

      // Creating 'Start Again' btn
      var strt_agn_btn =  document.createElement("button");
      strt_agn_btn.classList.add("btn-start-again");
      strt_agn_btn.innerHTML = "START AGAIN";
      square_info.appendChild(strt_agn_btn);

      main_section.appendChild(square_info);
    }

    // Adding event listener to 'start again' btn
    document.querySelector('.btn-start-again').addEventListener('click',startAgain);
}
// ----------------- END :: Display area, perimeter section ----------------------//