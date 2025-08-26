function checkAnswer(answer) {
            const respostaElement = document.getElementById('quiz-resposta');
            if (answer === '5') {
                respostaElement.textContent = 'Parabéns, resposta correta! (3 * 5 + 5 = 20)';
                respostaElement.style.color = 'green';
            } else {
                respostaElement.textContent = 'Resposta incorreta. Tente novamente.';
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
