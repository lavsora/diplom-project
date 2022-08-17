const review = () => {
    const comments = document.querySelector('.comments-container')

    const preloader = () => {
        const loader = document.createElement('div')

        loader.classList.add('sk-wave')

        loader.innerHTML = `<div class='sk-rect sk-rect-1'></div>
                            <div class='sk-rect sk-rect-2'></div>
                            <div class='sk-rect sk-rect-3'></div>
                            <div class='sk-rect sk-rect-4'></div>
                            <div class='sk-rect sk-rect-5'></div>`
        
        comments.innerHTML = ''
        comments.append(loader)
    }

    preloader()

    const atTheEnd = (data) => {
        const item = data.splice(data.length - 6, 1)[0]
        data.splice(data.length, 1, item)

        render(data)
    }

    const render = (data) => {
        comments.innerHTML = 
             `		<div class="review-margin-bottom row comment-item">
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="${data[0].image}" alt="" class="img-responsive avatar">
							</div>
						</div>
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-green review-arrow review-arrow-left">
								<p class="text-normal">${data[0].author}</p>
								<p>${data[0].comment}</p>
							</div>
						</div>
					</div>
                    
                    <div class="review-margin-bottom row comment-item">
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-gray review-arrow review-arrow-right">
								<p class="text-normal">${data[1].author}</p>
								<p>${data[1].comment}</p>
							</div>
						</div>
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="${data[1].image}" alt="" class="img-responsive avatar">
							</div>
						</div>
					</div>
                    
                    <div class="row comment-item">
                        <div class="col-xs-3 col-sm-2">
                            <div class="review-user">
                                <img src="${data[2].image}" alt="" class="img-responsive avatar">
                            </div>
                        </div>
                        <div class="col-xs-9 col-sm-9">
                            <div class="review-inner review-orange review-arrow review-arrow-left">
                                <p class="text-normal">${data[2].author}</p>
                                <p>${data[2].comment}</p>
                            </div>
                        </div>
                    </div>`
    }

    fetch('./comments.json')
        .then(res => res.json())
        .then(data => {
            render(data.comments)
            setInterval(() => atTheEnd(data.comments), 20000)
        })
}

export default review