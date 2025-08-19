 function toggleConteudo(id) {
            const conteudo = document.getElementById(id);
            if (conteudo.style.display === 'block') {
                conteudo.style.display = 'none';
            } else {
                conteudo.style.display = 'block';
            }
        }
