// Überprüfe, ob Benutzer eingeloggt ist
function checkAuth() {
    const memberAccess = sessionStorage.getItem('memberAccess');
    
    if (!memberAccess) {
        // Nicht eingeloggt - zurück zur Login-Seite
        window.location.href = 'login.html';
    }
    
    return memberAccess;
}

// Überprüfe MRR-Zugang
function checkMRRAccess() {
    const memberAccess = sessionStorage.getItem('memberAccess');
    
    if (memberAccess !== 'premium') {
        // Kein Premium-Zugang
        alert('⚠️ Dieser Bereich ist nur für Premium-Mitglieder verfügbar!');
        window.location.href = 'mitglieder.html';
    }
}

// Logout-Funktion
function logout() {
    sessionStorage.removeItem('memberAccess');
    window.location.href = 'login.html';
}

