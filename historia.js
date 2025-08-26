 function toggleDetails(id) {
        const detalhe = document.getElementById(id);
        if (detalhe.style.display === 'block') {
            detalhe.style.display = 'none';
        } else {
            detalhe.style.display = 'block';
        }
    }
