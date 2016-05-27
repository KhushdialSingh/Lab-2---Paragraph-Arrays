var story = [
	"I was at grandmas house with a friend.	Grandma cooked us breakfast and the sun	shone in through the windows and a song	played on the radio that helped us wake up. We ate eggs and toast as we wondered what we wanted to do for the day. We decided on a bicycle ride.",
	"I asked grandma if she wanted to join	us in our bicycle ride because I saw that she has a pretty nice bicycle out in the garage. She told us that she is not a strong bicyclist anymore. She told us	that her body prevents her spirit. We said we were sorry for her.",
	"She told us not to be sorry. She told us that she is thankful for the time that she had because her paraplegic son never had a day in his life where he could ride a bicycle or anything like that. And for that we could be sorry."	
];

(function(){
	var x = document.body.id;
	switch(x){
		case "paragraph1":
		document.getElementById("content").innerHTML = story[0];
		break;
		case "paragraph2":
		document.getElementById("content").innerHTML = story[1];
		break;
		case "paragraph3":
		document.getElementById("content").innerHTML = story[2];
		break;
		default:
		alert("ERROR");
		break;		
	}	
})();