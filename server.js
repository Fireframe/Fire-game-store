// Função para salvar os dados no localStorage
function saveUserData(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para carregar os dados do localStorage
function loadUserData() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Função para baixar um arquivo JSON
function downloadJSON(data, filename) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    const newUser = { username, email, password };
    const users = loadUserData();
    users.push(newUser);
    saveUserData(users);

    // Baixar os dados dos usuários como um arquivo JSON chamado 'contas.json'
    downloadJSON(users, 'contas.json');

    alert('Conta criada com sucesso!');
});
