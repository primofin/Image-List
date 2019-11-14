// Create function 'showImages' which
// loads images.json which has links to images as an array.

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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const ul = document.querySelector('ul');

const showImages = async (code) => {
    const mediaArray = await code;
    mediaArray.forEach((image) => {
        const h3 = document.createElement('h3');
        h3.innerHTML = `${image.mediaTitle}`;

        const figcaption = document.createElement('figcaption');
        figcaption.appendChild(h3);


        var img = document.createElement('img');
        img.setAttribute("src",`img/thumbs/${image.mediaThumb}`);

        const a = document.createElement('a');
        a.href = `img/original/${image.mediaUrl}`;
        a.appendChild(img);



        const figure = document.createElement('figure');
        figure.appendChild(a);
        figure.appendChild(figcaption);


        const li =document.createElement('li');
        li.appendChild(figure);
        ul.appendChild(li);
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
