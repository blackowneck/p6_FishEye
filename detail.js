
// Récupération de l'id se trouvant dans les paramètres de l'URL.
const queryString = window.location.search;
console.log("queryString : " + queryString);
const urlParams = new URLSearchParams(queryString);
// idparam contient l'id du photographe
const idparam = urlParams.get("id");
console.log("id param : " + idparam);

fetch('data/FishEyeData.json') // demande de récuperation pour charger le fichier question
.then(function (response) {
    return response.json();
.then(function (data) {
    showArray(data)     
})
.then(function(data) {
  appendData(data);
})
.catch(function(err) {
    console.log('erreur : ' + err);
});

//filtre tableau essai myriam vu 20 mai
function filter(id)
let array = [243, 930, 82, 527, 925, 195];

function showArray(data){
	let container = document.getElementById("container");
  for(let value of data){
  	container.innerHTML += value;

    if (value == media)
     {
        mediaFound = photographerId;

        console.log('found : ' + idparam);
    
    }else if(value != media){

        mediaFound >=5 photographerId ;

        photographerId = new array ;

        tableauMedia.filter(media => media.photographerId == id) 

        showArray(array);
    
  }
}

function appendData(data) {//essai
    let photographers= data.photographer.find;
    photographers => photographerId;
    id => id == idparam;//quand tu fais un filter tu dois le faire sur un tableau
    let filter array = data media.filter => media photographerId == param;
    appendData2 (photographers, filter array)
/*à l'intérieur de la fonction filter il faut lui passer ce que l'on appelle un predicate
c'est en fait une fonction qui va être appelée pour chaque élément du tableau
du coup il faut une variable qui représente un élément du tableau (dans l'exemple 
je l'ai appelé "element" avant la flèche)
et il faut une expression de comparaison sur cet élément
si la comparaison retourne true (vrai) alors filter va garder cet élément
si ça retourne false, filter ne garde par l'élément
et filter retourne le tableau filtré (il ne modifie pas le tableau d'origine, 
il en retourne un nouveau)*/
tableauMedia.filter(media => media.photographerId == id)//et là tu as un tableau filtré
//là actuellement ta fonction prend le tableau complet et elle s'occupe à la fois de filtrer ET d'afficher
//il faut filtrer ailleurs, et que la fonction ne fasse que l'affichage:thumbsup:
//il faut que ton filter soit en dehors de la fonction "appendData"(dans le meme fichier)
//je fait donc le filtre avant, Dans le même fichier (dans le then du fetch)

    .catch(function(err) {
        console.log('erreur : ' + err);
    });

    function appendData(photographer,data);
    }
     consol.log(photographer) ;
     for (let media of data){
         console.log(media);//dans le dom
         
     button.addvEndlistener(click, function) 
     let photographer = data photographer.find ;
     let filterArray  = data photographers.sort;
     let sortArray...= data sort Array;

     appendData(photographer, sort Array);
     //je peux utiliser appendData avec un autre tableau et ça va fonctionner 
    })



    // Structure photographers du JSON (articles)
    var photographers = data.photographers;

    var nameFound = "";

    // On récupére le nom du photographe à partir de son id
    for (photographer of photographers) {
        var idphoto = photographer.id;

        console.log('idphoto : ' + idphoto);

        if (idphoto == idparam) {
            nameFound = photographer.name;

            console.log('found : ' + idparam);
        }
    }

    // Structure media du JSON (détail)
    var medias = data.media;

    var found = false;

    var detail = document.getElementById('detail');

    // On parcours les médias pour retrouver ceux qui appartiennent
    // au photographe dont on a récupéré l'Id
    for (media of medias) {
        // id du photographe dans le media
        var idphoto = media.photographerId;

        // console.log('XXX idparam : ' + idparam);
        // console.log('XXX idphoto : ' + idphoto);

        // On vérifie si l'id du photographe se trouve dans le photographerId du media
        if (idphoto == idparam) {
            console.log("Photographer " + nameFound + " found with id : " + idparam);

            // On a trouvé un média pour ce photographe
            found = true;
 
            /*
                {
                  "id": 73852953,
                  "photographerId": 925,
                  "image": "Sport_2000_with_8.jpg",
                  "tags": ["sport"],
                  "likes": 52,
                  "date": "2013-02-30",
                  "price": 70
                },
            */
      
            // Nom du répertoire contenant les images du photographe
            // On remplace l'espace du "Prénom Nom" par un souligné (_)
            var dirName = nameFound.replace(" ", "_"); // Prenom_Nom photographe

            // var image = media.image;
            // console.log("File name : " + image);
            // var imgLength = image.length;
            // var fileExt = image.substring(imgLength-3, imgLength);
            // console.log("fileExt : " + fileExt);

            // On a besoin d'utiliser les clés du JSON pour identifier la nature du média
            // (image ou video)
            Object.keys(media).forEach(function(key) {
                console.log("media key : " + key);

                // Il s'agit d'une image
                if (key == "image") {
                    var image = media.image;
                    console.log("Image file : " + image);

                    // Construction du nom complet du fichier (avec le répertoire) et affichage
                    var img = document.createElement("img");       
                    img.src = "FishEyes_Photos/Sample_Photos/" + dirName + "/" + image;
                    img.alt = image;
                    img.width = "200";
                    img.height = "200";
                    detail.appendChild(img);

                // Il s'agit d'une video
                } else if (key == "video") {
                    /*
                    <video id="example_video_by_hand" class="video-js vjs-default-skin" controls width="640" height="264"
                           poster="http://video-js.zencoder.com/oceans-clip.jpg" preload="auto" data-setup="{}">
                        <source type="video/mp4" src="http://video-js.zencoder.com/oceans-clip.mp4">
                    </video>
                    */

                    var ivideo = media.video;
                    console.log("Video file : " + ivideo + " (" + key + ")");

                    // Construction du nom complet du fichier (avec le répertoire) et affichage
                    var video = document.createElement("video");
                    video.setAttribute("id", idphoto);
                    video.setAttribute("class", "video-js vjs-default-skin");
                    video.setAttribute("width", "560");
                    video.setAttribute("data-height", "400");
                    video.setAttribute("controls", " ");
                    video.setAttribute("poster", "FishEyes_Photos/video-logo.jpg");
                    video.setAttribute("preload", "auto");
                    video.setAttribute("data-setup", "{}");
                    
                    var source = document.createElement("source");
                    source.setAttribute("type", "video/mp4");
                    source.setAttribute("src", "FishEyes_Photos/Sample_Photos/" + dirName + "/" + ivideo);
                    
                    video.appendChild(source);
                    detail.appendChild(video);
                }
            });

            var tags = document.createElement("tags"); // tableau tags
            var itags = media.tags; // Attention c'est un tableau
            var tagList = "Tags : ";
            for (tag of itags) {
              console.log("tag: " + tag);
              tagList = tagList + " " + tag;
            }
            tags.innerText = tagList;
            detail.appendChild(tags);
            detail.appendChild(document.createElement("br"));

            var likes = document.createElement("likes");
            var ilikes = media.likes;
            likes.innerText = "Likes : " + ilikes;
            detail.appendChild(likes);
            detail.appendChild(document.createElement("br"));

            var date = document.createElement("date");
            var idate = media.date;
            date.innerText = "Date : " + idate;
            detail.appendChild(date);
            detail.appendChild(document.createElement("br"));

            var price = document.createElement("price");
            var iprice = media.price;
            price.innerText = "Prix : " + iprice + " €";
            detail.appendChild(price);
            detail.appendChild(document.createElement("br"));

            detail.appendChild(document.createElement("br"));
        }

    }

    if (!found) {
        console.log("No photographer found with id : " + idparam);

        var detail = document.getElementById('detail');

        var noMedia = document.createElement("noMedia");

        detail.innerText = "Pas de données détaillées";
        detail.appendChild(noMedia);
        detail.appendChild(document.createElement("br"));
    }

}