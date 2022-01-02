function add_user() {
    player_1 = document.getElementById("player1_input").value;

    localStorage.setItem("player_1",player_1);

    player_2 = document.getElementById("player2_input").value;

    localStorage.setItem("player_2",player_2);

    window.location = "main.html";
}