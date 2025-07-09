
links = new Array()
car_infos = []
for(let i=0; i<document.getElementsByClassName("rui-mfEVU").length; i++) {
	url = 'https://www.olx.in/en-in/kerala_g2001160/cars_c84?filter=make_eq_toyota%2Cmodel_eq_toyota-innova-crysta%2Cpetrol_eq_diesel%2Ctransmission_eq_1%2Cyear_between_2016_to_2020&page='
    fetch(url+i)
    .then(response => {
        return response.text()
    }).then(res => {
        resp = res.split('<li data-aut-id="itemBox2" data-aut-category-id="84" class="_3V_Ww">').slice(1,40)
        resp.forEach((x) => {
			link = 'https://www.olx.in' + x.split('<div class="_1HlM1">')[0].replaceAll('<a class="" href="', '').replaceAll('">', '')
            if(links.includes(link)) {}
            else {
                links.push(link)
    			fetch(link)
        		.then(response => {
        			return response.text()
        		}).then(page => {
                    try {
            			pages = page
            			imgs = []
            			imlinks = pages.split('https://apollo.olx.in/')
            			imlinks.slice(1,imlinks.length).forEach((x) => {
            				imgs.push('https://apollo.olx.in/'+x.split('image')[0] + 'image')
            			});
            			imgs = new Set(imgs)
            			header = pages.split('class="_2iMMO"')[1].split('</h1><div class="BxCeR">')
            			title = header[0].replaceAll(' data-aut-id=\"itemTitle\">','')
            			model = header[1].split('</div><div')[0]
            			fuel = header[1].split('itemAttribute_fuel')[1].split('</h2>')[0].replaceAll('\">','')
            			mileage = header[1].split('itemAttribute_mileage\">')[1].split(' Km</div></div>')[0].replaceAll(',','')
            			transmission = header[1].split('itemAttribute_transmission')[1].split('</h2>')[0].replaceAll('\">','')
            			details = pages.split('class="_2mPp9"')[1].split('class="_1TzGr"')[0]
            			owner = details.split('alt="')[1].split('"/><')[0]
            			locations = details.split('Location</div><div class="_3VRXh">')[1].split('</div></div>')[0]
            			post_date = details.split('\Location</div><div class="_3VRXh">')[1].split('class="_2oLNb" sizes="" sourceConfig="[object Object]" alt="')[1].split('"/></picture>')[0]
            			desc = pages.split('class="aLYgB">')[1].split('<div class="_3vNTy"')[0].replaceAll('<div data-aut-id="itemDescripton">','').replaceAll('</div></div>','\n').replaceAll('</div>','\n')
            			car_info = {
            				"link": link,
            				"images": imgs,
            				"title": title,
            				"model": model,
            				"fuel": fuel,
            				"mileage": mileage,
            				"transmission": transmission,
            				"owner": owner,
            				"location": locations,
            				"post_date": post_date,
            				"description": desc,
                            "error": "NO"
            			}
            			car_infos.push(car_info)
                    } catch (error){
                        car_info = {
            				"link": link,
            				"images": "",
            				"title": "",
            				"model": "",
            				"fuel": "",
            				"mileage": "",
            				"transmission": "",
            				"owner": "",
            				"location": "",
            				"post_date": "",
            				"description": "",
                            "error": "YES"
            			}
                        car_infos.push(car_info)
                        console.log(error, link)
                    }
        		});
            }
        });
    })
}
