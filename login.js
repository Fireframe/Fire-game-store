// Função para carregar os dados do localStorage
function loadUserData() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const users = loadUserData();

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login bem-sucedido!');
        // Salvar o usuário logado no localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // Redirecionar para a página principal
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha inválidos.');
    }
});
