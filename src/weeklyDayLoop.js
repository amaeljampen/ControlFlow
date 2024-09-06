function getDayLoop(day) {
    weekdays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    for (i = 1; i < weekdays.length; i++ )
    {
        if (day > 0 & day < 8 )
        {
            return weekdays[day-1]
        }
        else{
            return "Numéro de jour invalide";
        }
    }

}
console.log(getDayLoop(7));