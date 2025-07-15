var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/axios/dist/axios.min.js';   
document.head.appendChild(script);
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';   
document.head.appendChild(script);


function getHTML() {
	document.getElementsByTagName('html')[0].innerHTML = `<html>
<head>
	<style>
	body {
		margin:0px;
		font-family: monospace;
	}
	.mainDiv {
		display: flex;
	}
	.sideDiv{
		width: 10%;
	}
	.bodyDiv {
		width: 88%;
	}
	.carDiv {
		display: flex;
		width: 100%;
		margin: 2px;
		border: 1px solid grey;
		height: 175px;
	}
	.imgDiv {
		display: flex;
		width: 20%;
		height: 100%;
		justify-content: center;
		background: darkgrey;
	}
	.carImage {
		max-width: 100%;
		max-height: 100%;
	}
	.detDiv {
		width: 32%;
		height: 140px;
		padding: 0px 15px 0px 10px;
		margin: 12px 0px 10px 0px;
		border-right: 2px solid grey;
		border-radius: 2px;
	}
	.descDiv {
		width: 32%;
		height: 150px;
		overflow: auto;
		padding: 0px 10px 0px 10px;
		margin: 5px 0px 10px 0px;

	}
	.toolDiv {
		display: flex;
		flex-direction: column;
		width: 21%;
		height: 100%;
		text-align: center;
	}
	.title {
		color: black;
		font-size: 16px;
		font-weight: 800;
	    text-transform: capitalize;
	}
	.details {
		font-weight: 500;
		font-size: 15px;
		padding: 0px;
		margin: 0px;
	}
	.price {
		font-size: 17px;
		font-weight: 800;
	}
	.trows {
		display: flex;
		justify-content: space-between;
	}
	.rows {
		display: flex;
		justify-content: space-between;
	}
	.grids {
		display: flex;
		justify-content: space-between;
	}
	.description {
		font-size: 15px;
		font-weight: 500;
		text-align: justify;
	}
	.commentsDiv {
		height: 67%;
		padding: 10px 0px 0px 0px;
		font-weight: 800;
	}
	.commentsTitle  {
		height: 20%;
		font-size: 17px;
		font-weight: 800;
	}
	.comments {	
		font-size: 14px;
		height: 80%;
		overflow: auto;
		text-align: justify;
		padding: 3px;
	}
	.editBut {
		font-size: 12px;
		font-weight: 600;
		height: 12%;
		margin: 10px;
		width: 90%;
		align-self: center;
		background: #efefef;
	}
	.slideshow-container{
		align-items: center;
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 10111;
		background: #000000b5;
		padding: 0px;
		margin: 0px;
		display: none;
		justify-content: center;
	}

	.prev, .next, .close {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: white;
		font-weight: bold;
		font-size: 18px;
		transition: 0.6s ease;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}
	
	.prev {
		left: 10px;
	}
	
	.next {
		right: 10px;
	}
	
	.close {
		right: 10px;
		top: 10px;
	}

	.next {
	  right: 0;
	  border-radius: 3px 0 0 3px;
	}

	.prev:hover, .next:hover, .close:hover {
	  background-color: rgba(0,0,0,0.8);
	}
	.numbertext {
	  color: #f2f2f2;
	  font-size: 20px;
	  padding: 8px 12px;
	  position: absolute;
	  top: 0;
	}

	@keyframes fade {
	  from {opacity: .4}
	  to {opacity: 1}
	}
	.imgView {
		max-height: 600px;
		max-width: 1000px;
	}
	.controlsDiv {
		position: fixed;
		display: flex;
		flex-direction: column;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 10%;
	}
	.sortDiv{
		display: flex;
		width: 100%;
		height: 20%;
		margin: 1px 0px 1px 0px;
		border: 1px solid;
		border-radius: 5px;
	}
	.filterDiv {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 45%;
		margin: 1px 0px 1px 0px;
		border-radius: 5px;
		border: 1px solid;
	}
	.groupDiv{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 30%;
		margin: 1px 0px 1px 0px;
		border-radius: 5px;
		border: 1px solid;
	}
	.sortTitles {
		display: flex;
		flex-direction: column;
		width: 60%;
		height: 100%;
		background: #dfdfdf;
	}
	.sortNames {
		height: 33%;
		text-align: center;
		font-size: 15px;
		border: 1px solid black;
		margin: 0px;
		align-content: center;
	}
	.sortControls {
		display: flex;
		flex-direction: column;
		width: 40%;
		height: 100%;
	}
	.sortButton {
		font-size: 15px;
		height: 0px;
		border-radius: 0px;
		border: 1px solid;
		margin: 0px;
		padding: 0px;
	}
	.sortButton:hover {
		color: darkblue;
	}
	label {
		background: #efefef;
		height: 16.7%;
		border: 1px solid grey;
		text-align: center;
		font-size: 16px;
		align-content: center;
	}
	label:hover {
		background: #006dff4a;
	}
	input[type="radio"]:checked + label {
		background-color:#54da54;]
		font-weight: 800;
	}
	.filterButton {
		height: 0px;
		margin: 0px;
		font-size: 14px;
	}
	.checkLabel {
		height: 10%;
		background: #efefef;
	}
	input[type="checkbox"]:checked + label {
		background-color:#54da54;]
		font-weight: 800;
	}
	#filterNew {
		margin-bottom: 3px;
	}
	button:hover {
		background: #006dff4a;
	}
	.updateContainer {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #0000006b;
		z-index: 1421;
		display: none;
		justify-content: center;
	}
	.updateDiv {
		width: 23%;
		height: 30%;
		background: white;
		align-self: center;
		border-radius: 10px;
		box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0.8);
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.updateToggleDiv {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	.textDiv {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.switch {
		font-size: 13px;
		background: white;
		border: 0;
	}
	.checkbox {
		font-size: 10px;
	}
	.textInput {
		font-size: 13px;
		margin: 1.5px;
	}
	.updateTextDiv {
	    display: flex;
		padding: 10px;
		gap: 20px;
	}
	.updateTitle {
		font-size: 17px;
		font-weight: 800;
		text-transform: capitalize;
	}
	textarea {
		width: 270px;
		height: 20px;
	}
	.updateButtons {
		display: flex;
		flex-direction: row;
		padding: 5px;
	}
	.updateButton {
		background: #dfdfdf;
		width: 50%;
		height: 100%;
	}
	</style>
	<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
	
<head>
<body>
	<div class="slideshow-container"></div>
	<div class="updateContainer">
		<div class="updateDiv">
			<div class="updateTitle"> 1.toyota innova crysta (2019) </div>
			<div class="updateTextDiv">
				<div class="updateToggleDiv">
					<label class="switch"> Save:
					  <input type="checkbox" class="checkbox" id="favToggle"> 
					</label>
					<label class="switch"> Skip:
					  <input type="checkbox" class="checkbox" id="skipToggle">
					</label>
					<label class="switch"> is KL?:
					  <input type="checkbox" class="checkbox" id="klToggle">
					</label>
					<label class="switch"> is Re-reg?:
					  <input type="checkbox" class="checkbox" id="reRegToggle">
					</label>
					<label class="switch"> Accident:
					  <input type="checkbox" class="checkbox" id="accidentToggle">
					</label>
                    <label class="switch"> Reviewed:
					  <input type="checkbox" class="checkbox" id="reviewToggle">
					</label>
				</div>
				<div class="textDiv">
					<div> RC: <input class="textInput" id="dlInput"> </div>
					<div> State: <input class="textInput" id="stateInput"> </div>
					<div> Year: <input class="textInput" id="yearInput"> </div>
					<div> Month: <input class="textInput" id="monthInput"> </div>
				</div>
			</div>
			<div> Comment: <textarea type="textarea" class="commentsInput" id="commentInput"> </textarea></div>
			<div class="updateButtons">
				<button class="updateButton" id="submitUpdates" onclick="updateCar()">Update</button>
				<button class="updateButton" id="cancelUpdates" onclick="cancelUpdate()">Cancel</button>
			</div>
		</div>
	</div>
	<div class="mainDiv">
		<div class="sideDiv">
		
		</div>
		<div class="bodyDiv">
			
		</div>
	</div>
	<div class="controlsDiv">
		<div class="sortDiv">
			<div class="sortTitles">
				<p class="sortNames"> Price </p>
				<p class="sortNames"> Estimate </p>
				<p class="sortNames"> Mileage </p>
			</div>
			<div class="sortControls">
				<input type="radio" class="sortButton" id="sortPriceAsc" val="1" name="sortData" onclick="renderCars()"><label for="sortPriceAsc">△</label>
				<input type="radio" class="sortButton" id="sortPriceDesc" val="2" name="sortData" onclick="renderCars()"><label for="sortPriceDesc">▽</label>
				<input type="radio" class="sortButton" id="sortEstimateAsc" val="3" name="sortData" onclick="renderCars()"><label for="sortEstimateAsc">△</label>
				<input type="radio" class="sortButton" id="sortEstimateDesc" val="4" name="sortData" onclick="renderCars()"><label for="sortEstimateDesc">▽</label>
				<input type="radio" class="sortButton" id="sortMileageAsc" val="5" name="sortData" onclick="renderCars()"><label for="sortMileageAsc">△</label>
				<input type="radio" class="sortButton" id="sortMileageDesc" val="6" name="sortData" onclick="renderCars()"><label for="sortMileageDesc">▽</label>
			</div>
		</div>
		<div class="filterDiv">
			<input type="checkbox" class="filterButton" id="filter2016" val="2016" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filter2016">2016</label>
			<input type="checkbox" class="filterButton" id="filter2017" val="2017" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filter2017">2017</label>
			<input type="checkbox" class="filterButton" id="filter2018" val="2018" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filter2018">2018</label>
			<input type="checkbox" class="filterButton" id="filter2019" val="2019" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filter2019">2019</label>
			<input type="checkbox" class="filterButton" id="filter2020" val="2020" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filter2020">2020</label>
			<input type="checkbox" class="filterButton" id="filterNew" val="1" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filterNew">New</label>
			<input type="checkbox" class="filterButton" id="filterFavorites" val="2" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filterFavorites">Favorites</label>
			<input type="checkbox" class="filterButton" id="filterReviewed" val="3" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filterReviewed">Not Reviewed</label>
			<input type="checkbox" class="filterButton" id="filterSkipped" val="4" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filterSkipped">Skipped</label>
			<input type="checkbox" class="filterButton" id="filterNotAvailable" val="5" name="filterData" onclick="renderCars()"><label class="checkLabel" for="filterNotAvailable">Not Available</label>
		</div>
	</div>
</body>
</html>


`
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/axios/dist/axios.min.js';   
document.head.appendChild(script);
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';   
document.head.appendChild(script);
document.getElementById("sortPriceAsc").checked = true
}

function extractData(pages) {
    imgs = []
    link = ''
    header = ''
    title = ''
    model = ''
    fuel = ''
    mileage = ''
    transmission = ''
    details = ''
    owner = ''
    locarions = ''
    post_date = ''
    desc = ''
    price = ''
    year = ''
    month = ''
    kl_reg = ''
    re_reg = ''
    review = ''
    skip = ''
    dl_number = ''
    accident = ''
    reg = ''
    comment = ''
    fav = ''
    isNew = "YES"
    try {
    imlinks = pages.split('https://apollo.olx.in/')
    imlinks.slice(1,imlinks.length).forEach((x) => {
        imgs.push('https://apollo.olx.in/'+x.split('image')[0] + 'image')
    });
    } catch(e){}
    imgs = new Set(imgs)
    try { link = pages.split('property="og:url" content="')[1].split('"/><meta data-rh="true"')[0] } catch(e){}
    try { header = pages.split('class="_2iMMO"')[1].split('</h1>') } catch(e){}
    try { title = header[0].replaceAll(' data-aut-id=\"itemTitle\">','') } catch(e){}
    try { model = header[1].split('=\"BxCeR\">')[1].split('</div>')[0] } catch(e){}
    try { fuel = header[1].split('itemAttribute_fuel')[1].split('</h2>')[0].replaceAll('\">','') } catch(e){}
    try { mileage = header[1].split('itemAttribute_mileage\">')[1].split(' Km</div></div>')[0].replaceAll(',','') } catch(e){}
    try { transmission = header[1].split('itemAttribute_transmission')[1].split('</h2>')[0].replaceAll('\">','') } catch(e){}
    try { details = pages.split('class="_2mPp9"')[1].split('class="_1TzGr"')[0] } catch(e){}
    try { owner = details.split('alt="')[1].split('"/><')[0] } catch(e){}
    try { locations = details.split('Location</div><div class="_3VRXh">')[1].split('</div></div>')[0] } catch(e){}
    try { post_date = details.split('\Location</div><div class="_3VRXh">')[1].split('class="_2oLNb" sizes="" sourceConfig="[object Object]" alt="')[1].split('"/></picture>')[0] } catch(e){}
    try { desc = pages.split('class="aLYgB">')[1].split('<div class="_3vNTy"')[0].replaceAll('<div data-aut-id="itemDescripton">','').replaceAll('</div></div>','::').replaceAll('</div>','::').replaceAll('\t',' ') } catch(e){}
    try { price = pages.split('itemPrice\">')[1].split('</div></div>')[0].replaceAll('₹ ','').replaceAll(',','') } catch(e){}
    if(car_infos[link]) {
        isNew = "NO"
        year = car_infos[link]["year"]
        month = car_infos[link]["month"]
        kl_reg = car_infos[link]["kl_reg"]
        re_reg = car_infos[link]["re_reg"]
        review = car_infos[link]["review"]
        skip = car_infos[link]["skip"]
        dl_number = car_infos[link]["dl_number"]
        accident = car_infos[link]["accident"]
        reg = car_infos[link]["reg"]
        comment = car_infos[link]["comments"]
        fav = car_infos[link]["fav"]
    }
    car_info = {
        "link": link,
        "price": price,
        "images": [...imgs],
        "title": title,
        "model": model,
        "fuel": fuel,
        "mileage": mileage,
        "transmission": transmission,
        "owner": owner,
        "location": locations,
        "post_date": post_date,
        "description": desc,
        "error": "NO",
        "year": year,
        "month": month,
        "available": "YES",
        "kl_reg": kl_reg,
        "re_reg": re_reg,
        "reg": reg,
        "comments": comment,
        "accident": accident,
        "skip": skip,
        "dl_number": dl_number,
        "rating": "",
        "seats": "",
        "new": isNew,
        "color": "",
        "review": review,
        "fav": fav
    }
    return car_info
}

function createRow(car_info, i) {
    carDiv = document.createElement("div")
    carDiv.classList.add("carDiv")
    carDiv.setAttribute("id", car_info["link"]);
    
    imgDiv = document.createElement("div")
    imgDiv.classList.add("imgDiv")
    imgDiv.setAttribute("val", car_info["images"].toString())
	imgDiv.setAttribute("onclick", "imageClick('" + car_info["images"].toString() + "')")
    img = document.createElement("img")
    img.classList.add("carImage")
    img.src = car_info["images"][0]
    imgDiv.append(img)
    
    detDiv = document.createElement("div")
    detDiv.classList.add("detDiv")
    grids = document.createElement("div")
    grids.classList.add("grids")
    
    detGrid1 = document.createElement("div")
    detGrid1.classList.add("detGrid1")
    detGrid2 = document.createElement("div")
    detGrid2.classList.add("detGrid2")
    
    title = document.createElement("a")
    title.classList.add("title")
    title.href = car_info["link"]
    title.textContent = i + '. ' + car_info["title"]
	title.setAttribute('target','_blank')
    model = document.createElement("p")
    model.classList.add("details")
    model.classList.add("model")
    model.textContent = car_info["model"]
    fuel = document.createElement("p")
    fuel.classList.add("details")
    fuel.classList.add("fuel")
    fuel.textContent = car_info["fuel"]
    transmission = document.createElement("p")
    transmission.classList.add("details")
    transmission.classList.add("transmission")
    transmission.textContent = car_info["transmission"]
    mileage = document.createElement("p")
    mileage.classList.add("details")
    mileage.classList.add("mileage")
    mileage.textContent = car_info["mileage"] + ' Km'
    owner = document.createElement("p")
    owner.classList.add("details")
    owner.classList.add("owner")
    owner.textContent = car_info["owner"] + ' Owner'
    locations = document.createElement("p")
    locations.classList.add("details")
    locations.classList.add("locations")
    locations.textContent = car_info["location"]
    dlnumber = document.createElement("p")
    dlnumber.classList.add("details")
    dlnumber.classList.add("dlnumber")
    dlnumber.textContent = 'PLATE:  ' + (car_info["dl_number"] ?? '')
    
    dummy = document.createElement("p")
    dummy.classList.add("details")
    dummy.classList.add("dummy")
    dummy.textContent = '.'
    price = document.createElement("p")
    price.classList.add("details")
    price.classList.add("price")
    price.textContent = "Rs " + car_info["price"]
    year = document.createElement("p")
    year.classList.add("details")
    year.classList.add("year")
    year.textContent = car_info["year"]
    month = document.createElement("p")
    month.classList.add("details")
    month.classList.add("month")
    month.textContent = "Month: " + (car_info["month"] ?? '')
    reg = document.createElement("p")
    reg.classList.add("details")
    reg.classList.add("reg")
    reg.textContent = "Reg: " + (car_info["reg"] ?? '')
    rereg = document.createElement("p")
    rereg.classList.add("details")
    rereg.classList.add("rereg")
    rereg.textContent = "Re Reg: " + (car_info["re_reg"] ?? '')
    accident = document.createElement("p")
    accident.classList.add("details")
    accident.classList.add("accident")
    accident.textContent = "Accident: " + (car_info["accident"] ?? '')
    seats = document.createElement("p")
    seats.classList.add("details")
    seats.classList.add("seats")
    seats.textContent = "Seats: " + (car_info["seats"] ?? '7')
	color = document.createElement("p")
	color.classList.add("details")
    color.classList.add("color")
    color.textContent = "Color: "// + (car_info["color"] ?? '')
    
    detGrid1.append(title)
    detGrid1.append(model)
    // detGrid1.append(fuel)
    // detGrid1.append(transmission)
    detGrid1.append(mileage)
    detGrid1.append(owner)
    detGrid1.append(locations)
    detGrid1.append(dlnumber)
    
    // detGrid2.append(dummy)
    detGrid2.append(price)
    // detGrid2.append(year)
    detGrid2.append(month)
    detGrid2.append(reg)
    detGrid2.append(rereg)
    detGrid2.append(accident)
    //detGrid2.append(seats)
	//detGrid2.append(color)
    
    descDiv = document.createElement("div")
    descDiv.classList.add("descDiv")
    description = document.createElement("p")
    description.classList.add("description")
    description.innerHTML = car_info["description"].replaceAll('::','<br>')
    descDiv.append(description)
	
	toolDiv = document.createElement("div")
    toolDiv.classList.add("toolDiv")
	commentsDiv = document.createElement("div")
	commentsDiv.classList.add("commentsDiv")
	commentsTitle = document.createElement("p")
    commentsTitle.classList.add("commentsTitle")
	commentsTitle.textContent = 'Comments'
	comments = document.createElement("p")
    comments.classList.add("comments")
	comments.textContent = car_info["comments"]
	commentsDiv.append(commentsTitle)
	commentsDiv.append(comments)
	
	editBut = document.createElement("button")
	editBut.classList.add("editBut")
	editBut.textContent = 'Update'
	editBut.setAttribute("val", car_info["link"])
	editBut.setAttribute("onclick", "openUpdate('"+car_info["link"]+"')")
    toolDiv.append(commentsDiv)
	toolDiv.append(editBut)
    
    grids.append(detGrid1)
    grids.append(detGrid2)
    detDiv.append(grids)
    carDiv.append(imgDiv)
    carDiv.append(detDiv)
    carDiv.append(descDiv)
	carDiv.append(toolDiv)
    $('.bodyDiv').append(carDiv)
	
}

function imageClick(val) {
    images = val.split(',')
	images.forEach((x, i) => {
		$('.slideshow-container').append('<div class="mySlides fade"><div class="numbertext">' + (i+1) +' / ' + images.length + '</div><img class="imgVIew" src="' + x + ' style="width:100%"></div>')
	});
	$('.slideshow-container').append('<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a><a class="close" onclick="closeSlides(1)">X</a>')
	$(".slideshow-container").css('display', 'flex')
	currentSlide(1)
	$("body").css("overflow-y", "hidden");
	$("body").css("height", "100%");
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function closeSlides() {
  $(".slideshow-container").css('display', 'none');
  $("body").css("overflow-y", "auto");
  $("body").css("height", "100%");
  $('.slideshow-container').empty()
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

sortCode = -1
filters = []
car_infos = {}
setTimeout(function() {
	(async() => {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://unpkg.com/axios/dist/axios.min.js';   
		document.head.appendChild(script);
		const res = await axios.get("https://raw.githubusercontent.com/TheSoulReaperr/words/refs/heads/main/info.json")
		car_infos = res['data']
		for(let i=1; i<10; i++) {
			url = 'https://www.olx.in/en-in/kerala_g2001160/cars_c84?filter=make_eq_toyota%2Cmodel_eq_toyota-innova-crysta%2Cpetrol_eq_diesel%2Ctransmission_eq_1%2Cyear_between_2016_to_2020&page='
			fetch(url+i)
			.then(response => {
				return response.text()
			}).then(res => {
				resp = res.split('<li data-aut-id="itemBox2" data-aut-category-id="84" class="_3V_Ww">').slice(1,40)
				resp.forEach((x) => {
					link = 'https://www.olx.in' + x.split('<div class="_1HlM1">')[0].replaceAll('<a class="" href="', '').replaceAll('">', '')
                    fetch(link)
                    .then(response => {
                        link = response["url"]
                        response.text().then(page => {
							console.log("cars loaded")
                            try {
                                car_info = extractData(page)
                                car_infos[car_info["link"]] = car_info 
                            } catch(error) {
                                console.log(error, link)
                            }
                        })
					})
				})
			})
		}
		getHTML()
})()
}, 3000)

async function upload(words) {
  const owner = 'TheSoulReaperr';
  const repo = 'words';
  const path = 'info.json';
  const auth = '';

  const existingFile = await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      }
    }
  )).json();

  await (await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${auth}`
      },
      body: JSON.stringify({
        message: 'Updated info.json',
        content: btoa(unescape(encodeURIComponent(JSON.stringify(words)))),
        sha: existingFile.sha,
      }),
    }
  )).json();
}

function openUpdate(link) {
    car = car_infos[link]
    document.getElementById("favToggle").checked = car_infos[car["link"]]["fav"] == true ? true : false
    document.getElementById("skipToggle").checked = car_infos[car["link"]]["skip"] == true ? true : false
    document.getElementById("klToggle").checked = car_infos[car["link"]]["kl_reg"] == true ? true : false
    document.getElementById("reRegToggle").checked = car_infos[car["link"]]["re_reg"] == "YES" ? true : false
    document.getElementById("accidentToggle").checked = car_infos[car["link"]]["accident"] == "YES" ? true : false
	document.getElementById("reviewToggle").checked = car_infos[car["link"]]["review"] == true ? true : false
    document.getElementById("dlInput").value = car_infos[car["link"]]["dl_number"]
    document.getElementById("stateInput").value = car_infos[car["link"]]["reg"]
    document.getElementById("yearInput").value = car_infos[car["link"]]["year"]
    document.getElementById("monthInput").value = car_infos[car["link"]]["month"]
    document.getElementById("commentInput").value = car_infos[car["link"]]["comments"]
    document.getElementsByClassName("updateTitle")[0].textContent = car["title"]
    document.getElementsByClassName("updateContainer")[0].style.display = 'flex';
}

function updateCar() {
    fav = document.getElementById("favToggle").checked
    skip = document.getElementById("skipToggle").checked
    kl = document.getElementById("klToggle").checked 
    rereg = document.getElementById("reRegToggle").checked  ? "YES": "NO"
    acc = document.getElementById("accidentToggle").checked ? "YES": "NO"
	rev = document.getElementById("reviewToggle").checked
    dl = document.getElementById("dlInput").value
    state = document.getElementById("stateInput").value
    year = document.getElementById("yearInput").value
    month = document.getElementById("monthInput").value
    comment = document.getElementById("commentInput").value
    car_infos[car["link"]]["fav"] = fav
    car_infos[car["link"]]["skip"] = skip
    car_infos[car["link"]]["kl_reg"] = kl
    car_infos[car["link"]]["re_reg"] = rereg
    car_infos[car["link"]]["accident"] = acc
	car_infos[car["link"]]["review"] = rev
    car_infos[car["link"]]["dl_number"] = dl
    car_infos[car["link"]]["reg"] = state
    car_infos[car["link"]]["year"] = year
    car_infos[car["link"]]["month"] = month
    car_infos[car["link"]]["comments"] = comment
    document.getElementById("favToggle").checked = false
    document.getElementById("skipToggle").checked = false
    document.getElementById("klToggle").checked = false
    document.getElementById("reRegToggle").checked = false
    document.getElementById("accidentToggle").checked = false
	document.getElementById("reviewToggle").checked = false
    document.getElementById("dlInput").value = ''
    document.getElementById("stateInput").value = ''
    document.getElementById("yearInput").value = ''
    document.getElementById("monthInput").value = ''
    document.getElementById("commentInput").value = ''
    document.getElementsByClassName("updateContainer")[0].style.display = "none";
    renderCars(true)
}

function cancelUpdate() {
    document.getElementById("favToggle").checked = false
    document.getElementById("skipToggle").checked = false
    document.getElementById("klToggle").checked = false
    document.getElementById("reRegToggle").checked = false
    document.getElementById("accidentToggle").checked = false
	document.getElementById("reviewToggle").checked = false
    document.getElementById("dlInput").value = ''
    document.getElementById("stateInput").value = ''
    document.getElementById("yearInput").value = ''
    document.getElementById("monthInput").value = ''
    document.getElementById("commentInput").value = ''
    document.getElementsByClassName("updateContainer")[0].style.display = "none";
}

function renderCars(update) {
	document.getElementsByClassName("bodyDiv")[0].innerHTML = ''
    count = 1
    filtered_infos = filterData(car_infos)
    sorted_infos = sortData(filtered_infos)
    Object.keys(sorted_infos).forEach((x) => {
        if(x!='') {
            if(sorted_infos[x]["model"].includes('GX') || sorted_infos[x]["model"].includes('2.4')) {}
            else    {
                createRow(sorted_infos[x], count)
                count++
            }
        }
    })
    if(update) upload(car_infos)
}

function sortData(data) {
    lists = {}
    if(document.getElementById("sortPriceAsc").checked == true) { // price-asc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["price"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => a[1] - b[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    }
    else if(document.getElementById("sortPriceDesc").checked == true) { // price-desc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["price"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => b[1] - a[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    }
    else if(document.getElementById("sortEstimateAsc").checked == true) { // estimate-asc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["estimate"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => a[1] - b[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    }
    else if(document.getElementById("sortEstimateDesc").checked == true) { // estimate-desc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["estimate"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => b[1] - a[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    }
    else if(document.getElementById("sortMileageAsc").checked == true) { // mileage-asc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["mileage"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => a[1] - b[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    }
    else if(document.getElementById("sortMileageDesc").checked == true) { // mileage-desc
        Object.keys(data).forEach((x) => {
          lists[x] = data[x]["mileage"];
        })
        entries = Object.entries(lists);
        entry = entries.sort((a, b) => b[1] - a[1]);
        sortedData = {}
        entry.forEach((x) => {
            sortedData[x[0]] = data[x[0]]
        });
        return sortedData
    } else {
		return data
	}
}

function filterData(data) {
    filteredlinks = []
    filterElements = document.getElementsByClassName("filterButton")
    filterCodes = []
    for(let i=0; i<filterElements.length;i++) {
        if(filterElements[i].checked) {
            filterCode = filterElements[i].getAttribute('val')
            filterCodes.push(filterCode)
        }
    }
    years = filterCodes.filter((x) => { return x > 2000 })
    groups = filterCodes.filter((x) => { return x > 0 && x <10 })
    if(years.length == 0) {
        filteredLinks = Object.keys(car_infos)
    } else {
        filteredLinks = Object.keys(car_infos).filter((x) => {
            return x != '' && years.includes(car_infos[x]["title"].split('(')[1].split(')')[0])
        });
    }
    groupedLinks = filteredLinks
    if(groups.length == 0) {
    } else {
        groupedLinks = []
        groups.forEach((x) => {
            if(x == '1') {
                groupedLinks = groupedLinks.concat(filteredLinks.filter((x) => {
                    return car_infos[x]["new"] == 'YES'
                }))
            }
            if(x == '2') {
                groupedLinks = groupedLinks.concat(filteredLinks.filter((x) => {
                    return car_infos[x]["fav"] == true
                }))
            }
            if(x == '3') {
                groupedLinks = groupedLinks.concat(filteredLinks.filter((x) => {
                    return car_infos[x]["review"] == false
                }))
            }
            if(x == '4') {
                groupedLinks = groupedLinks.concat(filteredLinks.filter((x) => {
                    return car_infos[x]["skip"] != ''
                }))
            }
            if(x == '5') {
                groupedLinks = groupedLinks.concat(filteredLinks.filter((x) => {
                    return car_infos[x]["skip"] != ''
                }))
            }
        })
    }
    if(!groups.includes('4')) {
        groupedLinks = groupedLinks.filter((x) => {
            return car_infos[x]["skip"] == ''
        })
    }
    if(!groups.includes('5')) {
        groupedLinks = groupedLinks.filter((x) => {
            return car_infos[x]["available"] == 'YES'
        })
    }
    filteredData = {}
    groupedLinks.forEach((x) => {
        filteredData[x] = car_infos[x]
    });
    return filteredData
}
