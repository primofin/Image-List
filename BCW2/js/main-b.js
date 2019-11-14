// Create function 'showImages' which
// loads images.json which has links to images as an array.

    const ul = document.querySelector('ul');

    const showImages = async (code) => {
        const mediaArray = await code;
        mediaArray.forEach((image) => {
            ul.innerHTML += `
    <li>
        <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
        </figure>
    </li>
    `;
        });
    };


    const getFetchData = async (url) => {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    };
    try {
        const code = getFetchData('./images.json');
        showImages(code);
    } catch (e) {
        console.error(e);
    }




// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/



// After the loop print the HTML into <ul> element using innerHTML.
