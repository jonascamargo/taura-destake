document.querySelectorAll('.thumb-box a').forEach(thumb => {
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        const mainImageBox = document.querySelector('.image-box a');
        const mainImage = mainImageBox.querySelector('img');
        
        mainImageBox.href = this.href;
        mainImage.src = this.querySelector('img').src;
        
        document.querySelectorAll('.thumb-box a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});