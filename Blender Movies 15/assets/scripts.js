let posters = [
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]

let movie = {
    "videoUrl" : "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title" : "Sintel",
    "description" : "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments" : [
        {
            "name" : "Micheal Scott",
            "image": "assets/images/reviewers/micheal.png",
            "comment" : "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name" : "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "assets/images/reviewers/dwight.png",
            "comment" : "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name" : "Jim Halpert",
            "image" : "assets/images/reviewers/jim.png",
            "comment" : "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name" : "Pam Beesly Halpert",
            "image" : "assets/images/reviewers/pam.png",
            "comment" : "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name" : "Angela Martin",
            "image" : "assets/images/reviewers/angela.png",
            "comment" : "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name" : "Kevin Malone",
            "image" : "assets/images/reviewers/kevin.png",
            "comment" : "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name" : "Andy Bernard",
            "image": "assets/images/reviewers/andy.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
}
// Creating main section
let mainSection = document.querySelector("main");

// -------------- START :: Sintel movie column ----------------------
// Creating sintel column div container 
let sintelColumn = document.createElement("div");
sintelColumn.classList.add("sintel-column");
mainSection.appendChild(sintelColumn);

// Creating video element
let video = document.createElement("video");
video.controls = true;
// video.setAttribute("poster","./assets/images/reviewers/andy.png")
video.setAttribute("src",movie.videoUrl);
video.setAttribute("type","video/mp4");
video.classList.add("video");
sintelColumn.appendChild(video);

// Creating 'Sintel' heading
let sintelHeading = document.createElement("h1");
sintelHeading.classList.add("sintel-heading");
sintelHeading.innerHTML = movie.title;
sintelColumn.appendChild(sintelHeading);

// Creating movie description
let movieDesc = document.createElement("div");
movieDesc.classList.add("movie-desc");
movieDesc.innerHTML = movie.description;
sintelColumn.appendChild(movieDesc);

// Creating horizontal line
let hrLine = document.createElement("div");
hrLine.classList.add("hr-line");
sintelColumn.appendChild(hrLine);

// Creating 'Comments' heading
let commentsHeading = document.createElement("div");
commentsHeading.classList.add("heading-comments");
commentsHeading.innerHTML = "Comments";
sintelColumn.appendChild(commentsHeading);

// Creating comments of reviewers
for(let i=0; i<movie.comments.length; i++)
{
    // Creating comment container
    let commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");
    sintelColumn.appendChild(commentContainer);

    // Creating reviewer img
    let reviewerImg = document.createElement("img");
    reviewerImg.setAttribute("src",movie.comments[i].image);
    reviewerImg.setAttribute("alt","Reviewer photo");
    reviewerImg.classList.add("reviewer-img");
    commentContainer.appendChild(reviewerImg);

    // Creating review container
    let reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review");
    commentContainer.appendChild(reviewContainer);

    // Creating reviewer name
    let reviewerName = document.createElement("div");
    reviewerName.classList.add("reviewer-name");
    reviewerName.innerHTML = movie.comments[i].name;
    reviewContainer.appendChild(reviewerName);

    // Creating reviewer description 
    let reviewerDesc = document.createElement("div");
    reviewerDesc.classList.add("review-desc");
    reviewerDesc.innerHTML = movie.comments[i].comment;
    reviewContainer.appendChild(reviewerDesc);
}
// -------------- END :: Sintel movie column ----------------------

// -------------- START :: Upcoming projects column ----------------------
// Creating ad column container
let adColumn = document.createElement("div");
adColumn.classList.add("ad-column");
mainSection.appendChild(adColumn);

// Creating 'Upcoming projects' heading
let upcomingProjects = document.createElement("h2");
upcomingProjects.classList.add("upcoming-heading");
upcomingProjects.innerHTML = "Upcoming Projects";
adColumn.appendChild(upcomingProjects);

// Creating upcoming projects posters
for(let i=0; i<posters.length; i++)
{
    let posterImg = document.createElement("img");
    posterImg.setAttribute("src", posters[i].imageUrl);
    posterImg.setAttribute("alt", posters[i].title);
    adColumn.appendChild(posterImg);
}
// -------------- END :: Upcoming projects column ----------------------
