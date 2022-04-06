
document.getElementById('menu').addEventListener('click', function () {
    console.log('The Navbar on mobile was opened!');
});

function chtitle() {
    x = prompt('Enter the text you want to select as title...');
    document.title = x;
}