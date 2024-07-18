function toggleList(){
    const list = document.getElementById('plantaslist');
    const link = document.querySelector('.nav-link1');

    if(list.style.display === 'none' || list.style.display === ''){
        list.style.display = 'block';
        link.classList.add('active');
    }else{
        list.style.display = 'none';
        link.classList.remove('active');
        window.location.reload();
    }
    }
