$(document).ready(function() {

    /* HORLOGE */
    dows  = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    mois  = ["janv", "f&eacute;v", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "sept", "oct", "nov", "d&eacute;c"];

    now          = new Date;
    heure        = now.getHours();
    min          = now.getMinutes();
    sec          = now.getSeconds();
    jour_semaine = dows[now.getDay()];
    jour         = now.getDate();
    mois         = mois[now.getMonth()];
    annee        = now.getFullYear();

    if (sec < 10){sec0 = "0";}else{sec0 = "";}
    if (min < 10){min0 = "0";}else{min0 = "";}
    if (heure < 10){heure0 = "0";}else{heure0 = "";}

    if (sec % 2 != 0){sep = ":";}else{sep = "<span class='horloge_grey'>:</span>";}

    horloge_heure   = heure + sep + min0 + min;
    horloge_date    = "<span class='horloge_grey'>" + jour_semaine + "</span> " + jour + " " + mois + " <span class='horloge_grey'>" + annee + "</span>";
    horloge_content = "<div class='horloge_heure'>" + horloge_heure + "</div><div class='horloge_date'>" + horloge_date + "</div>";

    console.log($('#horloge'));
    console.log(horloge_content);
    //$('#horloge').html('coucou');
    $('#horloge').html(horloge_content);

});

