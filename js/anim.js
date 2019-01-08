function changeBackground()
{	i>imgArray.length-1&&(i=0),
		j>sayings.length-1&&(j=0),
		$(".tlt").fadeOut(1e3,function(){
			$(this).text(sayings[j]).fadeIn(1e3),j++}),
		$(".topimg").fadeOut(500,function(){$(this).attr("src",imgArray[i]).fadeIn(500)})
		$(".lifeimg").fadeOut(500,function(){$(this).attr("src",lifeimg[i]).fadeIn(500)})
		$(".life2img").fadeOut(500,function(){$(this).attr("src",life2img[i]).fadeIn(500),i++})
}
var lifeimg=["images/kids3.jpg","images/kids12.jpg"];
var life2img=["images/kids.jpg","images/2.jpg"];
var imgArray=["images/background/emerald20.jpg","images/background/emerald2.jpg"]
var sayings=[
			"~It is easier to build up a child than it is to repair an adult",
			"~It is vital when educating our childern's brains that we do no neglect to educate their hearts",
			"~There are two gifts we should give our children,one is roots, and the other is wings",
			"~Treat a child as though he already is person he's capable of becoming",
			"~Children are not things to be moulded but people to be unfolded",
			"~Raise your words not your voice, it is rain that grows flowers not thunder",
			"~Every child is gifted they just unwrap their packages at different times "];
var i=0,j=0
$(window).load(function(){
	setInterval(function(){
			changeBackground()
	},5e3)
});
