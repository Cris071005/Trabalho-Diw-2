<script>
    document.addEventListener('DOMContentLoaded', function() {
        fetch('http://localhost:3000/projetos')
            .then(response => response.json())
            .then(data => {
                const portfolioContent = document.getElementById('portfolio-content');
                const modalsContainer = document.getElementById('modals-container');
                portfolioContent.innerHTML = '';
                modalsContainer.innerHTML = '';

                data.forEach((projeto, index) => {
                    const colDiv = document.createElement('div');
                    colDiv.className = 'col-lg-4 mb-4 animate__animated animate__fadeIn';
                    colDiv.innerHTML = `
                        <div class="card">
                            <img src="${projeto.imagem}" class="card-img-top" alt="Projeto ${index + 1}">
                            <div class="card-body">
                                <h5 class="card-title">${projeto.titulo}</h5>
                                <p class="card-text">${projeto.descricao}</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projeto${index + 1}Modal">Detalhes</button>
                            </div>
                        </div>
                    `;
                    portfolioContent.appendChild(colDiv);

                    const modalDiv = document.createElement('div');
                    modalDiv.className = 'modal fade animate__animated animate__fadeIn';
                    modalDiv.id = `projeto${index + 1}Modal`;
                    modalDiv.tabIndex = '-1';
                    modalDiv.setAttribute('aria-labelledby', `projeto${index + 1}ModalLabel`);
                    modalDiv.setAttribute('aria-hidden', 'true');
                    modalDiv.innerHTML = `
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="projeto${index + 1}ModalLabel">Detalhes do ${projeto.titulo}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="${projeto.imagem}" class="img-fluid mb-3" alt="${projeto.titulo}">
                                    <h5>${projeto.titulo}</h5>
                                    <p>Data de Criação: ${projeto.dataCriacao}</p>
                                    <p>${projeto.descricaoDetalhada}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    modalsContainer.appendChild(modalDiv);
                });
            })
            .catch(error => console.error('Erro ao buscar dados do servidor:', error));
    });
</script>
