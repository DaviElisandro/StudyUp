function checkAnswer(answer) {
            const respostaElement = document.getElementById('quiz-resposta');
            if (answer === 'Fotossíntese') {
                respostaElement.textContent = 'Parabéns, resposta correta!';
                respostaElement.style.color = 'green';
            } else {
                respostaElement.textContent = 'Resposta incorreta. O processo é a fotossíntese.';
                respostaElement.style.color = 'red';
            }
        }

        function toggleConteudo(id) {
            const conteudo = document.getElementById(id);
            if (conteudo.style.display === 'block') {
                conteudo.style.display = 'none';
            } else {
                conteudo.style.display = 'block';
            }
        }
