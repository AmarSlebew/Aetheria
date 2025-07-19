const gambar =document.getElementById('galeri')
const tombol = document.querySelectorAll('.btn-galeri')

const dataGambar = {

    pemandangan: ['img/alam/alam1.jpg', 'img/alam/alam2.jpg', 'img/alam/alam3.jpg',
        'img/alam/alam4.jpg', 'img/alam/alam5.jpg', 'img/alam/alam6.jpg'
    ],
    fasilitas : ['img/fasilitas/fas1.jpg', 'img/fasilitas/fas2.jpg', 'img/fasilitas/fas3.jpg', 'img/fasilitas/fas4.jpg',
        'img/fasilitas/fas5.jpg', 'img/fasilitas/fas6.jpg'
    ],
    desain : ['img/interior/in1.jpg', 'img/interior/in2.jpg', 'img/interior/in3.jpg', 'img/interior/in4.jpg',
        'img/interior/in5.jpg', 'img/interior/in6.jpg'
    ]

}

function ubahGaleri (kategori , tombolYangDiklik) {
    gambar.innerHTML = ''

    const foto = dataGambar[kategori]
    for(let i = 0; i < foto.length ; i += 3){
        const divBaris = document.createElement('div')
        divBaris.className = 'baris1';

        for (let j = i ; j < i + 3 && j < foto.length; j++) {
            const img = document.createElement('img')
            img.src = foto[j]
            img.className = 'foto'
            divBaris.appendChild(img);
        }

        gambar.appendChild(divBaris)
    }
    
            tombol.forEach(tombol=> {
                tombol.classList.remove('active')
            });
            
            tombolYangDiklik.classList.add('active')
            // tombolYangDiklik.classList.add('')
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    // Jika scroll lebih dari 50px dari atas header, tambahkan class 'scrolled'
    if (window.scrollY > 400) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

    window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    });

