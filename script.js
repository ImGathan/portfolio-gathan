window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const listBtn = document.querySelector('.list-btn');
    const dropNavbar = document.querySelector('.drop-navbar');
    let isNavbarVisible = false;  // Untuk melacak status navbar (terlihat atau tidak)

    // Tambah log untuk debugging
    console.log(listBtn);
    console.log(dropNavbar);

    listBtn.addEventListener('click', () => {
        if (isNavbarVisible) {
            // Navbar terlihat, sembunyikan
            dropNavbar.style.transform = 'translateY(-100%)';
        } else {
            // Navbar tersembunyi, tampilkan
            dropNavbar.style.transform = 'translateY(0)';
        }
        isNavbarVisible = !isNavbarVisible;  // Toggle status navbar
    });
});