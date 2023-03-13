var posters;

var movie;

// Ajax call for posters JSON file loading
$.ajax({
    async: false,
    url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346", 
    success: function(response){
        posters = response;
    }
});

// Ajax call for movie JSON file loading
$.ajax({
    async: false,
    url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0", 
    success: function(response){
        movie = response;
    }
});

// -------------- START :: Sintel movie column ----------------------
// Creating sintel column div container 
let $sintelColumn = $(`<div></div>`);
$sintelColumn.attr("class","sintel-column");
$("main").append($sintelColumn);

// Creating video element
let $video = $(`<video controls><source src= ${movie.videoUrl} type="video/mp4"></video>`);
$video.attr("class","video");

// Creating 'Sintel' heading
let $sintelHeading = $(`<h1>${movie.title}</h1>`);
$sintelHeading.attr("class","sintel-heading");

// Creating movie description 
let $movieDesc = $(`<div>${movie.description}</div>`);
$movieDesc.attr("class","movie-desc");

// Creating horizontal line
let $hrLine = $(`<div></div>`);
$hrLine.attr("class","hr-line");

// Creating 'Comments' heading
let $commentsHeading = $(`<h2>Comments</h2>`);
$commentsHeading.attr("class","heading-comments");

$sintelColumn.append($video, $sintelHeading, $movieDesc, $hrLine, $commentsHeading);
// Creating comments of reviewers
for(let i=0; i<movie.comments.length; i++)
{
    // Creating comment container
    $commentContainer = $(`<div></div>`);
    $commentContainer.attr("class","comment");

    // Creating reviewer img
    let $reviewerImg =  $(`<img src='../assets/${movie.comments[i].image}'>`); //put closing tag and see
    $reviewerImg.attr("class","reviewer-img");
    $reviewerImg.attr("alt","Reviewer photo");
    $commentContainer.append($reviewerImg);

    // Creating review container
    let $reviewContainer = $(`<div></div>`);
    $reviewContainer.attr("class","review");
    $commentContainer.append($reviewContainer);

    // Creating reviewer name
    let $reviewerName = $(`<div>${movie.comments[i].name}</div>`);
    $reviewerName.attr("class","reviewer-name");
    $reviewContainer.append($reviewerName);

    // Creating reviewer description 
    let $reviewerDesc = $(`<div>${movie.comments[i].comment}</div>`);
    $reviewerDesc.attr("class","review-desc");
    $reviewContainer.append($reviewerDesc);

    $sintelColumn.append($commentContainer);
}
// -------------- END :: Sintel movie column ----------------------

// -------------- START :: Upcoming projects column ----------------------
// Creating ad column container
let $adColumn = $(`<div></div>`);
$adColumn.attr("class","ad-column");
$("main").append($adColumn);

// Creating 'Upcoming projects' heading
let $upcomingProjects = $(`<h2>Upcoming Projects</h2>`);
$upcomingProjects.attr("class","upcoming-heading");
$adColumn.append($upcomingProjects);

// Creating upcoming projects posters
for(let i=0; i<posters.length; i++)
{
    let $posterImg = $(`<img src=${posters[i].imageUrl} alt=${posters[i].title}/>`);
    $adColumn.append($posterImg);
}
// -------------- END :: Upcoming projects column ----------------------