function licznik() {
    var iloscznakow = document.getElementById('iloscznakow').value;
    var kejsik = document.getElementById('kejsik').value;
    var wynik = '';

    if (kejsik == 1) {
        wynik = 'Liczba arkuszy wydawniczych: ' + (iloscznakow / 40000).toFixed(2);
    } else if (kejsik == 2) {
        wynik = 'Liczba potencjalnych stron: ' + (iloscznakow / 1800).toFixed(0);
    } else if (kejsik == 3) {
        wynik = 'Liczba arkuszy wydawniczych: ' + (iloscznakow / 40000).toFixed(2) + '<br>' +
                'Liczba potencjalnych stron: ' + (iloscznakow / 1800).toFixed(0);
    }

    document.getElementById('podanodane').innerHTML = wynik;
}
