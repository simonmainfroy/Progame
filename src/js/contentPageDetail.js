const ContentPageDetail = () =>{
	const content = `
      <section class="page-detail">

        <div class="game">

          <div class="imgTop">

          </div>
          <button class="btn buttonWebsite"> </button>
          <div class="container">
          	<h2 class="title"></h2>
          	<p class="rating"> <span class="ratingNote"> </span> /5 - <span class="numberNote"></span> votes</p>
          	<p class="description"></p>

    	      <div class="informationsRow">
      	      <div class="release-date">
        	      <h5>Released Date</h5>
          	    <span class="dateReleased"> </span>
	            </div>
  	          <div>
    	          <h5>Developer</h5>
      	        <div class="developers"></div>
        	    </div>
          	  <div>
            	  <h5>Platforms</h5>
              	<div class="platforms"></div>
	            </div>
	            <div>
  	            <h5>Publishers</h5>
    	          <div class="publishers"></div>
      	      </div>
        	    <div>
          	    <h5>Genres</h5>
            	  <div class="genres"></div>
	            </div>
  	          <div>
    	          <h5>Tags</h5>
      	        <div class="tags"></div>
        	    </div>
          	</div>
         		<div>
          	  <h3>Buy</h3>
            	<ul class="buyStore"> </ul>
          	</div>
         	 	<div>
            	<h3> Trailer </h3>
            	<div id="videotrailer">
            	<video width="640" height="480" controls>              
            	</video></div>
          	</div>
          	<div>
          		<h3>Screenshots</h3>
          		<div id="imgScreenshots"> </div>
          	</div>
          	<div>
          		<h3>Youtube</h3>
          		<div id="youtubeContent"></div>
          		<div id="youtubeContentBis"></div>
          	</div>
          </div>



        </div>
      </section>
    `;
    return content;
} 

export {ContentPageDetail};