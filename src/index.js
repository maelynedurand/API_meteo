var dateDuJour = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateFormatee = dateDuJour.toLocaleDateString('fr-FR', options);

    
    document.getElementById('dateParagraphe').innerText = dateFormatee;