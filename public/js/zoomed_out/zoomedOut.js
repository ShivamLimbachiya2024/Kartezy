document.addEventListener('DOMContentLoaded', function () {
    const zoomImg = document.querySelector('.zoom-img');
    const zoomedImg = document.querySelector('.zommed-image');

    zoomImg.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const bgX = (x / width) * 100;
        const bgY = (y / height) * 100;

        zoomedImg.style.backgroundImage = `url('${this.src}')`;
        zoomedImg.style.backgroundPosition = `${bgX}% ${bgY}%`;
        zoomedImg.style.display = 'block';
    });
    zoomImg.addEventListener('mouseleave', function () {
        zoomedImg.style.display = 'none';
    })
    zoomImg.addEventListener('mouseenter', function () {
        document.body.style.cursor='zoom-out'
    })
    zoomImg.addEventListener('mouseleave', function () {
        document.body.style.cursor='auto'
    })
})
